import React, { useEffect, useState } from 'react';
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const ServicesTemplate = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const client = new DynamoDBClient({
                region: import.meta.env.VITE_REACT_APP_DB_REGION,
                credentials: {
                    accessKeyId: import.meta.env.VITE_REACT_APP_DB_ACCESS_KEY_ID,
                    secretAccessKey: import.meta.env.VITE_REACT_APP_DB_SECRET_ACCESS_KEY,
                },
            });
            const command = new ScanCommand({ 
                TableName: "services" 
            });

            const response = await client.send(command);

            setData(response.Items);
        };
        fetchData();
    }, []);

    return (
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map((service, index) => (
                <a
                    key={index}
                    className="block rounded-xl border border-[#fff] dark:border-[#181825] p-8 shadow-lg transition hover:border-teal-500/10 hover:shadow-teal-500/10 bg-[#fff] dark:bg-[#181825]"
                    href="#"
                >
                    <img src={service.icon.S} className='mb-4' alt="Service Icon" />
                    <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">{service.servicename.S}</h2>
                    <p className="mt-4 text-sm text-gray-300">{service.servicedesc.S}</p>
                </a>
            ))}
        </div>
    );
};

export default ServicesTemplate;