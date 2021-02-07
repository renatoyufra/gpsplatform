import { useState } from "react";

const UserForm = ({ addUser }) => {
    const [item, setItem] = useState({ user: "", car: "", imei: "" });

    const handleSubmit = (e) => {
        console.log("miau");
        e.preventDefault();
        addUser(item);
        setItem({ user: "", car: "", imei: "" });
    };

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div className="flex flex-col justify-center sm:py-4">
            <div className="relative sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center space-x-5">
                            <div className="h-9 w-9 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                                i
                            </div>
                            <div className="block pl-2 font-semibold text-l self-start text-gray-700">
                                <h2 className="leading-relaxed">
                                    Registro de Usuario
                                </h2>
                                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                                    Registre los datos del usuario
                                </p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="py-2 text-base leading-4 space-y-2 text-gray-700 sm:text-xs sm:leading-4">
                                    <div className="flex flex-col">
                                        <label className="leading-loose">
                                            Usuario
                                        </label>
                                        <input
                                            type="text"
                                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Event title"
                                            name="user"
                                            value={item.user}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">
                                            Placa
                                        </label>
                                        <input
                                            type="text"
                                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Optional"
                                            name="car"
                                            value={item.car}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">
                                            IMEI
                                        </label>
                                        <input
                                            type="text"
                                            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                            placeholder="Optional"
                                            name="imei"
                                            value={item.imei}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="pt-4 flex items-center space-x-4">
                                    <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                        <svg
                                            className="w-6 h-6 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            ></path>
                                        </svg>{" "}
                                        Cancelar
                                    </button>
                                    <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                                        Crear
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
