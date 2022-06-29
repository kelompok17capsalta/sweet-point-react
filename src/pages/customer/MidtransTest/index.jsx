import {
	useSelector,
} from "react-redux";
import Swal from "sweetalert2";

const MidtransTest = () => {
  const customer = useSelector((state) => state.customer.value);
	const payload = { 
    order: {
      id: +new Date(),
    },
    total_price: 50000,
    customer,
  }

	const handlePay = async (e) => {
    try {
      const response = await fetch('http://127.0.0.1:9000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseJson = await response.json();

      window.snap.pay(responseJson.token, {
        onSuccess: async (result) => {
          /* You may add your own implementation here */
          await Swal.fire("payment success!");
          console.log({ success: result });
        },
        onPending: async (result) => {
          await Swal.showLoading();
          console.log({ pending: result });
        },
        onError: async (result) => {
          /* You may add your own implementation here */
          await Swal.fire("payment failed!");
          console.log({ error: result, });
        },
      });

    } catch (error) {
      console.log(error);
    }
	};

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <button className="btn btn-primary" onClick={handlePay}>Bayar !</button>
    </div>
  );
};

export default MidtransTest;
