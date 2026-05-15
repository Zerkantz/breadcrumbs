import { useState } from "react";
import Breadcrumb from "./Breadcrumb";

export default function Products() {
    const [sizeFilter, setSizeFilter] = useState(null);
    const [colorFilter, setColorFilter] = useState(null);

    const dogsArray = [
        { size: "S", color: "white", image: "/small-white-dog.jpg", name: "Gigi", age: 1 },
        { size: "M", color: "white", image: "/medium-white-dog.jpg", name: "Tom", age: 2 },
        { size: "L", color: "white", image: "/big-white-dog.jpg", name: "Jake", age: 3 },
        { size: "S", color: "black", image: "/small-black-dog.jpg", name: "Hill", age: 1 },
        { size: "M", color: "black", image: "/medium-black-dog.jpg", name: "Jack", age: 2 },
        { size: "L", color: "black", image: "/big-black-dog.jpg", name: "Jones", age: 3 },
        { size: "S", color: "brown", image: "/small-brown-dog.jpg", name: "Herbert", age: 1 },
        { size: "M", color: "brown", image: "/medium-brown-dog.jpg", name: "Coco", age: 2 },
        { size: "L", color: "brown", image: "/big-brown-dog.jpg", name: "Benny", age: 3 },
    ];

    const filteredDogs = dogsArray.filter((dog) => {
        if (sizeFilter && dog.size !== sizeFilter) return false;
        if (colorFilter && dog.color !== colorFilter) return false;
        return true;
    });

    const sizeBtn = (val, label) => (
        <button
            onClick={() => setSizeFilter(val)}
            className={`filter-btn px-4 py-2 rounded-full text-sm font-medium border ${sizeFilter === val
                    ? "bg-orange-800 text-white border-orange-800"
                    : "bg-white text-orange-900 border-orange-200 hover:border-orange-400"
                }`}>
            {label}
        </button>
    );

    const colorBtn = (val, label) => (
        <button
            onClick={() => setColorFilter(val)}
            className={`filter-btn px-4 py-2 rounded-full text-sm font-medium border ${colorFilter === val
                    ? "bg-orange-800 text-white border-orange-800"
                    : "bg-white text-orange-900 border-orange-200 hover:border-orange-400"
                }`}>
            {label}
        </button>
    );

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            {/* Header */}
            <div className="mb-8 text-center">
                <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-2">
                    Find your companion
                </p>
                <h1 className="text-5xl text-orange-950 mb-1">Adopt a Dog 🐶</h1>
                <p className="text-orange-700 text-sm mt-2">
                    {filteredDogs.length} dogs available
                </p>
            </div>

            {/* Breadcrumb */}
            <div className="flex justify-center">
                <Breadcrumb sizeFilter={sizeFilter} colorFilter={colorFilter} />
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap gap-6 mb-10 items-center justify-center">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-orange-800 font-medium w-12">Size:</span>
                    <div className="flex gap-2">
                        {sizeBtn(null, "All")}
                        {sizeBtn("S", "Small")}
                        {sizeBtn("M", "Medium")}
                        {sizeBtn("L", "Large")}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-orange-800 font-medium w-12">Color:</span>
                    <div className="flex gap-2">
                        {colorBtn(null, "All")}
                        {colorBtn("white", "White")}
                        {colorBtn("brown", "Brown")}
                        {colorBtn("black", "Black")}
                    </div>
                </div>
            </div>

            {/* Grid de perros */}
            {filteredDogs.length === 0 ? (
                <div className="text-center py-20 text-orange-400 text-lg">
                    No dogs match this filter 🐾
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {filteredDogs.map((dog) => (
                        <div key={dog.name} className="dog-card bg-white rounded-2xl overflow-hidden border border-orange-100 cursor-pointer">
                            <div className="aspect-square overflow-hidden bg-orange-50">
                                <img
                                    className="w-full h-full object-cover"
                                    src={dog.image}
                                    alt={dog.name}
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.parentElement.innerHTML =
                                            `<div class="w-full h-full flex items-center justify-center text-5xl">🐕</div>`;
                                    }}
                                />
                            </div>
                            <div className="p-3">
                                <h3 className="font-semibold text-orange-950 text-base mb-2">{dog.name}</h3>
                                <div className="flex flex-wrap gap-1">
                                    <span className="text-xs bg-orange-50 text-orange-700 border border-orange-100 rounded-full px-2 py-0.5">
                                        {dog.size === "S" ? "Small" : dog.size === "M" ? "Medium" : "Large"}
                                    </span>
                                    <span className="text-xs bg-orange-50 text-orange-700 border border-orange-100 rounded-full px-2 py-0.5 capitalize">
                                        {dog.color}
                                    </span>
                                    <span className="text-xs bg-orange-50 text-orange-700 border border-orange-100 rounded-full px-2 py-0.5">
                                        {dog.age} yr{dog.age > 1 ? "s" : ""}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}