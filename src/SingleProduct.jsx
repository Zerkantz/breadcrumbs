import { useParams } from "react-router-dom";

export default function SingleProduct() {
    const { productId } = useParams();

    return (
        <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold text-[#2E4053]">
                Product #{productId}
            </h2>
            <p className="text-gray-600 mt-2">
                Detalles del producto {productId}
            </p>
        </div>
    );
}