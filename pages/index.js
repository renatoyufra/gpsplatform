import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import UserForm from "../components/UserForm";
import Usertable from "../components/UserTable";

export default function Home() {
    const [users, setUsers] = useState([
        { user: "INTERBANK", car: "PKL222", imei: "323232323" },
        { user: "PANDERO", car: "PO2222", imei: "99999999" },
    ]);
    const addUser = (item) => {
        setUsers([...users, item]);
    };
    const removeItem = (itemToBeDeleted) => {
        console.log("a borrar:" + JSON.stringify(itemToBeDeleted));
        setUsers(users.filter((item) => itemToBeDeleted !== item));
    };
    return (
        <div>
            <Header />
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-6">
                    <h1 className="text-2xl font-bold leading-tight text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header>
            <main className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-2 sm:px-6 lg:px-8">
                    <div className="px-4 py-2 sm:px-0">
                        <div className="rounded-lg">
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <UserForm addUser={addUser} />
                                </div>
                                <div className="py-9">
                                    <Usertable
                                        users={users}
                                        removeItem={removeItem}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
