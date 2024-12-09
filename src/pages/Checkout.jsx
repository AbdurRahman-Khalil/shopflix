import { useEffect } from "react";

import { CheckedOutProducts } from "../components/checkout/CheckedOutProducts";
import { BillingSec } from "../components/checkout/BillingSec";
import { BackBtn } from "../components/BackBtn";
import { SuccessModal } from "../components/modals/SuccessModal";


export const Checkout = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    return (
        <>
            <section className="mt-[5.8rem] mb-[2.5rem] px-5 md:px-10 xl:mx-auto xl:container duration-200 ease-linear">
                <div className="flex items-center gap-[1.1rem] mb-[1.35rem]">
                    <BackBtn />
                    <h2 className="text-[1.7rem] uppercase font-semibold dark:font-medium">
                        Checkout
                    </h2>
                </div>
                <CheckedOutProducts />
                <BillingSec />
            </section>
            <SuccessModal
                modalTitle={"Purchase Successful!🥳"}
                modalDesc={"Thank you for your purchase!"}
                actionOneText={"Go to Home"}
                actionTwoText={"Shop more"}
            />
        </>
    );
};
