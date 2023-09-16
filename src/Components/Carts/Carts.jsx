
import Cart from "../CartElement/Cart";

const Carts = ({ cartTitle, courseCredit, coursePrice }) => {

    
    let serialNumber=1;


    return (
        <div className="w-1/4 bg-[#FFF] px-6 pb-6 h-full">
            <h2 className="mt-6 text-[#2F80ED] font-bold text-lg">Credit Hour Remaining {20 - courseCredit} hr</h2>
            {cartTitle.length > 0 ? <hr className="my-4" /> : null}

            {cartTitle.length > 0 ? <h2 className="text-[#1C1B1B] text-xl font-bold mb-5">Course Name</h2> : null}

            {

                cartTitle.map((title, idx) =>
                    <Cart
                        title={`${serialNumber++} ${title}`}
                        key={idx}>
                    </Cart>) 
            }
            {cartTitle.length > 0 ? <hr className="mt-6" /> : null}

            {cartTitle.length > 0 ? <h2 className="my-4 text-[#1C1B1BCC] text-base font-medium">Total Credit Hour: {courseCredit}</h2> : null}

            {cartTitle.length > 0 ? <hr /> : null}

            {cartTitle.length > 0 ? <h2 className="mt-4 text-[#1C1B1BCC] text-base font-semibold">Total Price: {coursePrice} USD</h2> : null}


        </div>
    );
};

export default Carts;



