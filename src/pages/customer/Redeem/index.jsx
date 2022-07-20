/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import style from './style.module.css';
import ProfileCard from '../../../components/ProfileCard';
import LogoRedeem from '../../../components/LogoRedeem';

// Services
import Product from '../../../services/api/Product';
import Transaction from '../../../services/api/Transaction';
import Customer from '../../../services/api/Customer';
import { updateProductList, updateCategory } from '../../../services/redux/ProductList';
import { updateCustomer } from '../../../services/redux/Customer';

// Utils
import ProductHelper from '../../../utils/ProductHelper';
import ErrorHandler from '../../../utils/ErrorHandler';
import MoneyFormatter from '../../../utils/MoneyFormatter';

// Errors
import InvariantError from '../../../errors/InvariantError';

const Redem = () => {
  const {
    result: productList,
  } = useSelector((state) => state.productList);
  const sortedProductList = [...productList].sort((a, b) => {
    if (a.points < b.points) {
      return -1;
    }
    if (a.points > b.points) {
      return 1;
    }
    return 0;
  });

  const customer = useSelector((state) => state.customer.value);

  const initialRedeemValue = {
    provider: '',
    credentials: '',
    product_id: '',
    points: 0,
    descriptions: '',
    denom: 0,
  };

  const [redeemValue, setRedeemValue] = useState(initialRedeemValue);
  const dispatch = useDispatch();
  const { category } = useParams();

  const providers = [
    {
      name: 'XL',
      category: 'pulsa',
    },
    {
      name: 'Indosat',
      category: 'pulsa',
    },
    {
      name: 'Tri',
      category: 'pulsa',
    },
    {
      name: 'Telkomsel',
      category: 'pulsa',
    },
    {
      name: 'Smartfren',
      category: 'pulsa',
    },
    {
      name: 'XL',
      category: 'paket data',
    },
    {
      name: 'Indosat',
      category: 'paket data',
    },
    {
      name: 'Tri',
      category: 'paket data',
    },
    {
      name: 'Telkomsel',
      category: 'paket data',
    },
    {
      name: 'Smartfren',
      category: 'paket data',
    },
    {
      name: 'OVO',
      category: 'e-money',
    },
    {
      name: 'Dana',
      category: 'e-money',
    },
    {
      name: 'Gopay',
      category: 'e-money',
    },
    {
      name: 'Shopeepay',
      category: 'e-money',
    },
    {
      name: 'LinkAja',
      category: 'e-money',
    },
    {
      name: 'BCA',
      category: 'cash out',
    },
    {
      name: 'BRI',
      category: 'cash out',
    },
    {
      name: 'BNI',
      category: 'cash out',
    },
    {
      name: 'BTN',
      category: 'cash out',
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRedeemValue({
      ...redeemValue,
      [name]: value,
    });
  };

  const setCurrentProduct = ({
    id, points, descriptions, denom,
  }) => {
    setRedeemValue({
      ...redeemValue,
      product_id: id,
      points,
      descriptions,
      denom,
    });
  };

  const updateList = async () => {
    try {
      if (category) {
        Swal.showLoading();
        setRedeemValue(initialRedeemValue);
        const newProductList = await Product.getAllProducts();
        dispatch(updateCategory(category));
        dispatch(updateProductList(newProductList));
        Swal.close();
      }
    } catch (error) {
      ErrorHandler.handle(error);
    }
  };

  useEffect(() => {
    updateList();
  }, [category]);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      Swal.showLoading();

      if (!redeemValue.product_id) {
        throw new InvariantError('Pilih produk terlebih dahulu');
      }

      await Transaction.createTransaction({
        ...redeemValue,
        username: customer?.username,
        category: ProductHelper.formatCategory(category),
      });

      const updatedCustomerData = await Customer.getCustomer();

      const updatedCustomer = { ...customer, ...updatedCustomerData };

      dispatch(updateCustomer(updatedCustomer));

      await Swal.fire(
        'Produk Berhasil diklaim !',
        'Silahkan tunggu notifikasi pengiriman kamu ya.',
        'success',
      );
    } catch (error) {
      ErrorHandler.handle(error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Informasi Akun
            </li>
          </ol>
        </nav>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <ProfileCard />
          </div>

          <div className="col-12 col-lg-8">
            <form className="row" onSubmit={handleSubmit}>
              <div className="col-12">
                <h2 className={style.title}>Redeem Category</h2>
                <span className={style.title__description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean maecenas diam amet faucibus vitae tristique nulla
                  faucibus urna.
                </span>
              </div>

              <div className="col-12 my-3">
                <div className="d-flex justify-content-between flex-wrap px-1">
                  <LogoRedeem text="Cash Out" category="cash_out" />
                  <LogoRedeem text="Pulsa" category="pulsa" />
                  <LogoRedeem text="Paket Data" category="paket_data" />
                  <LogoRedeem text="E-Money" category="e-money" />
                </div>
              </div>

              {category && (
              <>
                <div className="col-12 mt-5">
                  <h2 className={style.title}>Pilih Paket</h2>
                  <label className={style.title__description} htmlFor="provider">Provider</label>
                  <div className="input-group d-flex align-items-center">
                    <select
                      className={`form-control form-control-lg ${style.input__nomor} mb-3`}
                      id="provider"
                      name="provider"
                      placeholder="Contoh : 081276598720"
                      value={redeemValue.provider}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Pilih Provider</option>
                      {providers.map((provider) => {
												  if (provider.category !== ProductHelper.formatCategory(category).toLowerCase()) {
												    return (<React.Fragment key={`${provider.name}-${provider.category}`} />);
												  }

												  return (
  <option key={provider.name} value={provider.name}>{provider.name}</option>
												  );
                      })}
                    </select>
                    {/* <span className={`input-group-text ${style.logo__operator}`}>
												<img src={indosat} alt="" />
											</span> */}
                  </div>

                  <label className={style.title__description} htmlFor="credentials">Masukkan Nomor</label>
                  <div className="input-group d-flex align-items-center">
                    <input
                      className={`form-control form-control-lg ${style.input__nomor}`}
                      type="tel"
                      name="credentials"
                      id="credentials"
                      placeholder="Contoh : 081276598720"
                      value={redeemValue.credentials}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-12 my-5 d-flex justify-content-around flex-wrap">
                  {sortedProductList.map((product) => (
                    <div
                      key={product.id}
                      className={`d-flex justify-content-around mb-4 ${style.card} ${redeemValue.productId === product.id && style.active}`}
                      onClick={() => {
												  setCurrentProduct(product);
                      }}
                    >
                      <div className={`align-self-center ${style.harga__point}`}>
                        <span className={style.number}>
                          {MoneyFormatter.format(product.denom)}
                        </span>
                        <span className={style.jmlh__point}>{MoneyFormatter.format(product.points)} point</span>
                      </div>

                      <div>
                        {/* <span className={style.jenis__paket}>{product.name}</span> */}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-12 mb-5">
                  <div className={style.container__keterangan}>
                    <span className={style.keterangan}>Keterangan</span>
                    <span className={style.keterangan__hari}>
                      {redeemValue.descriptions}
                    </span>
                  </div>
                </div>

                <div className="col-12 d-flex justify-content-between align-items-center mb-5">
                  <div>
                    <span className={style.required}>Point yang dibutuhkan</span>
                    <h3 className={style.title}>{MoneyFormatter.format(redeemValue.points)} Point</h3>
                  </div>
                  <div>
                    <button
                      className={`btn btn-lg btn-primary ${style.btn__submit}`}
                      type="submit"
                    >
                      Redeem Now
                    </button>
                  </div>
                </div>
              </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Redem;
