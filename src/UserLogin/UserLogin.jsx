import React, { useState } from 'react';

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function login(e) {
        e.preventDefault();
        if (!email.endsWith(".ru")) {
            console.log("Yalnız .ru domenlərinə icazə verilir.");
            return;
        }
        if (password.length < 8) {
            console.log("Parol ən azı 8 simvol olmalıdır.");
            return;
        }
        console.log("Logged in successfully!");
    }

    return (
        <div className="h-[90vh] flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
                <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Login</h3>
                <form className="flex flex-col gap-4">
                    <input
                        type="email"
                        onChange={handleEmailChange}
                        placeholder="Email"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    />
                    <input
                        type="password"
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                    />
                    <button
                        type="submit" onClick={login}
                        className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserLogin;
