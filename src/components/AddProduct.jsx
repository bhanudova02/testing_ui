import { useState } from "react";
import SearchableDropdown from "./SearchableDropdown";
export function AddProduct() {
    const styleCls = {
        errorCss: 'border border-red-400 outline-none focus:ring-1 focus:border-red-500 focus:ring-red-500',
        validCss: 'border border-gray-300 focus:ring-1 focus:border-blue-500 focus:ring-blue-500',
    };

    const [product, setProduct] = useState({
        productName: '',
        productNumber: '',
        productMobile: '',
        productEmail: '',
        productCity: '',
        productCountry: '',
        productDescription: '',
        productTerms: false,
        gender: ''
    });

    const [error, setErrors] = useState({
        productNameError: '',
        productNumberError: '',
        productMobileError: '',
        productEmailError: '',
        productCityError: '',
        productCountryError: '',
        productDescriptionError: '',
        productTermsError: '',
        genderError: ''
    });

    const validateField = (fieldName, value) => {
        let errorMessage = '';

        switch (fieldName) {
            case 'productName':
                if (!value.trim()) {
                    errorMessage = 'Product name is required.';
                } else if (!/^[a-zA-Z]+$/.test(value.trim())) {
                    errorMessage = 'Product name must contain only letters.';
                }
                break;
            case 'productNumber':
                if (!value.trim()) {
                    errorMessage = 'Product number is required.';
                } else if (!/^[0-9]+$/.test(value.trim())) {
                    errorMessage = 'Product number must contain only numbers.';
                }
                break;
            case 'productMobile':
                if (!value.trim()) {
                    errorMessage = 'Mobile number is required.';
                } else if (!/^[0-9]{10}$/.test(value.trim())) {
                    errorMessage = 'Mobile number must contain exactly 10 digits.';
                }
                break;
            case 'productEmail':
                if (!value.trim()) {
                    errorMessage = 'Email is required.';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
                    errorMessage = 'Invalid Email Address.';
                }
                break;
            case 'productCity':
                if (!value.trim()) {
                    errorMessage = 'Please select a city.';
                }
                break;
            case 'productCountry':
                if (!value.trim()) {
                    errorMessage = "Country Is Required";
                }
                break;
            case 'productDescription':
                if (!value.trim()) {
                    errorMessage = "Product Description Is Required";
                } else if (value.trim().length < 10) {
                    errorMessage = "Min 10 Characters Are Required";
                }
                break;
            case 'productTerms':
                if (!value) {
                    errorMessage = "You must agree to the terms.";
                }
                break;
            case 'gender':
                if (!value) {
                    errorMessage = "Please Select Gender";
                }
                break;
            default:
                break;
        }

        return errorMessage;
    };


    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        const errorMessage = validateField(name, fieldValue);
        setProduct((prev) => ({ ...prev, [name]: fieldValue }));
        setErrors((prev) => ({ ...prev, [`${name}Error`]: errorMessage }));
    };


    const handleBlur = (e) => {
        const { name, value } = e.target;
        const errorMessage = validateField(name, value);
        setErrors((prev) => ({ ...prev, [`${name}Error`]: errorMessage }));
    };

    const handleSubmit = () => {
        const newErrors = {
            productNameError: validateField('productName', product.productName),
            productNumberError: validateField('productNumber', product.productNumber),
            productMobileError: validateField('productMobile', product.productMobile),
            productEmailError: validateField('productEmail', product.productEmail),
            productCityError: validateField('productCity', product.productCity),
            productCountryError: validateField('productCountry', product.productCountry),
            productDescriptionError: validateField('productDescription', product.productDescription),
            productTermsError: validateField('productTerms', product.productTerms),
            genderError: validateField('gender', product.gender),
        };

        setErrors(newErrors);

        const isValid = !Object.values(newErrors).some((errorMsg) => errorMsg !== '');

        if (isValid) {
            console.log('Product Details:', product);
            alert(`productName: ${product.productName}\nproductNumber:${product.productNumber}\nproductMobile: ${product.productMobile}\nproductEmail: ${product.productEmail}\nproductCity: ${product.productCity}\nproductCountry: ${product.productCountry}\nproductDescription: ${product.productDescription}\nproductTerms: ${product.productTerms}\ngender: ${product.gender}\n
            `)
        }
    };


    const countries = [
        { id: 1, name: "Argentina" },
        { id: 2, name: "Australia" },
        { id: 3, name: "Austria" },
        { id: 4, name: "Brazil" },
        { id: 5, name: "Bangladesh" },
        { id: 6, name: "Belgium" },
        { id: 7, name: "Canada" },
        { id: 8, name: "Chile" },
        { id: 9, name: "China" },
        { id: 10, name: "Denmark" },
        { id: 11, name: "Dominican Republic" },
        { id: 12, name: "Djibouti" },
        { id: 13, name: "Egypt" },
        { id: 14, name: "Ecuador" },
        { id: 15, name: "Ethiopia" },
        { id: 16, name: "France" },
        { id: 17, name: "Finland" },
        { id: 18, name: "Fiji" },
        { id: 19, name: "Germany" },
        { id: 20, name: "Greece" },
        { id: 21, name: "Ghana" },
        { id: 22, name: "Hungary" },
        { id: 23, name: "Honduras" },
        { id: 24, name: "Haiti" },
        { id: 25, name: "India" },
        { id: 26, name: "Indonesia" },
        { id: 27, name: "Ireland" },
        { id: 28, name: "Japan" },
        { id: 29, name: "Jamaica" },
        { id: 30, name: "Jordan" },
        { id: 31, name: "Kenya" },
        { id: 32, name: "Kazakhstan" },
        { id: 33, name: "Kuwait" },
        { id: 34, name: "Luxembourg" },
        { id: 35, name: "Laos" },
        { id: 36, name: "Lebanon" },
        { id: 37, name: "Mexico" },
        { id: 38, name: "Malaysia" },
        { id: 39, name: "Morocco" },
        { id: 40, name: "Netherlands" },
        { id: 41, name: "Nepal" },
        { id: 42, name: "Nigeria" },
        { id: 43, name: "Oman" },
        { id: 44, name: "Pakistan" },
        { id: 45, name: "Peru" },
        { id: 46, name: "Philippines" },
        { id: 47, name: "Qatar" },
        { id: 48, name: "Romania" },
        { id: 49, name: "Russia" },
        { id: 50, name: "Rwanda" },
        { id: 51, name: "Spain" },
        { id: 52, name: "Sweden" },
        { id: 53, name: "Switzerland" },
        { id: 54, name: "Thailand" },
        { id: 55, name: "Turkey" },
        { id: 56, name: "Tunisia" },
        { id: 57, name: "Uganda" },
        { id: 58, name: "Ukraine" },
        { id: 59, name: "United States" },
        { id: 60, name: "Vietnam" },
        { id: 61, name: "Venezuela" },
        { id: 62, name: "Zimbabwe" },
    ];


    return (
        <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Product</h2>
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col">
                        <input
                            name="productName"
                            type="text"
                            placeholder="Enter product name"
                            value={product.productName}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={`${error.productNameError ? styleCls.errorCss : styleCls.validCss} 
                            rounded-lg px-4 py-2 text-sm font-medium outline-none`}
                        />
                        <span className="text-xs text-red-500 font-medium mt-1">{error.productNameError}</span>
                    </div>
                    <div className="flex flex-col">
                        <input
                            name="productNumber"
                            type="text"
                            placeholder="Enter Number"
                            value={product.productNumber}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={`${error.productNumberError ? styleCls.errorCss : styleCls.validCss} 
                            rounded-lg px-4 py-2 text-sm font-medium outline-none`}
                        />
                        <span className="text-xs text-red-500 font-medium mt-1">{error.productNumberError}</span>
                    </div>
                    <div className="flex flex-col">
                        <input
                            name="productMobile"
                            type="text"
                            placeholder="Enter Mobile Number"
                            value={product.productMobile}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={`${error.productMobileError ? styleCls.errorCss : styleCls.validCss} 
                            rounded-lg px-4 py-2 text-sm font-medium outline-none`}
                        />
                        <span className="text-xs text-red-500 font-medium mt-1">{error.productMobileError}</span>
                    </div>
                    <div className="flex flex-col">
                        <input
                            name="productEmail"
                            type="email"
                            placeholder="Enter Email"
                            value={product.productEmail}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={`${error.productEmailError ? styleCls.errorCss : styleCls.validCss} 
                            rounded-lg px-4 py-2 text-sm font-medium outline-none`}
                        />
                        <span className="text-xs text-red-500 font-medium mt-1">{error.productEmailError}</span>
                    </div>
                    <div className="flex flex-col">
                        <select
                            name="productCity"
                            value={product.productCity}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={`${error.productCityError ? styleCls.errorCss : styleCls.validCss} 
                            rounded-lg px-4 py-2 text-sm font-medium outline-none`}
                        >
                            <option value="">Choose City</option>
                            <option value="hyd">Hyderabad</option>
                            <option value="delhi">Delhi</option>
                            <option value="chennai">Chennai</option>
                        </select>
                        <span className="text-xs text-red-500 font-medium mt-1">{error.productCityError}</span>
                    </div>
                    <div>
                        {/* Dropdown Search Container */}
                        <div className="flex flex-col">
                            <SearchableDropdown
                                options={countries}
                                label="name"
                                name="productCountry"
                                id="id"
                                selectedVal={product.productCountry}
                                handleChange={(val) =>
                                    handleInputChange({
                                        target: { name: "productCountry", value: val || "" },
                                    })
                                }
                                handleBlur={() =>
                                    handleBlur({
                                        target: { name: "productCountry", value: product.productCountry },
                                    })
                                }
                                claName={`${error.productCountryError ? styleCls.errorCss : styleCls.validCss} 
                                rounded-lg px-4 py-2 text-sm font-medium outline-none w-full`}
                            />
                            <span className="text-xs text-red-500 font-medium mt-1">{error.productCountryError}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <textarea
                            rows={6}
                            name="productDescription"
                            placeholder="Enter Description"
                            value={product.productDescription}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={`${error.productDescriptionError ? styleCls.errorCss : styleCls.validCss} 
                            rounded-lg px-4 py-2 text-sm font-medium outline-none`}
                        ></textarea>
                        <span className="text-xs text-red-500 font-medium mt-1">{error.productDescriptionError}</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                        <input
                            name="productTerms"
                            type="checkbox"
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-xs text-black font-medium">I agree to the terms</span>
                    </div>
                    <span className="text-xs text-red-500 font-medium mt-1">{error.productTermsError}</span>
                </div>
                <div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={product.gender === "male"}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-sm">Male</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={product.gender === "female"}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span>Female</span>
                        </div>
                    </div>
                    <span className="text-xs text-red-500 font-medium mt-1">{error.genderError}</span>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
