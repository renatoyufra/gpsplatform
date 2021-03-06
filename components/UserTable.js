import UserItem from "./UserItem";

const Usertable = ({ users, removeItem }) => {
    return (
        <div className="flex flex-col">
            <div className="-my-2 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle sm:inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow border-b overflow-x-auto border-gray-200 sm:rounded-lg md:overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Usuario
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Vehiculo
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Role
                                    </th>
                                    <th
                                        scope="col"
                                        className="relative px-6 py-3"
                                    >
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {users.length != 0 ? (
                                    users.map((item) => (
                                        <UserItem
                                            key={item.imei}
                                            item={item}
                                            removeItem={removeItem}
                                        />
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap text-center"
                                            colSpan="5"
                                        >
                                            Sin registros
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usertable;
