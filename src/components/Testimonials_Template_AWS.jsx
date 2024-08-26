import React, { useEffect, useState } from 'react';
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const Testimonials_Template_AWS = () => {
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
                TableName: "testimonials" 
            });

            const response = await client.send(command);

            setData(response.Items);
        };
        fetchData();
    }, []);

    return (
        <div>
            {data.map((testimonial, index) => (
                <div className="mb-8 sm:break-inside-avoid" key={index}>
                    <blockquote className="rounded-2xl bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt=""
                                src={testimonial.avatar.S}
                                className="size-14 rounded-full object-cover"
                            />
                            <div>
                                <div className="hidden flex justify-center gap-0.5 text-green-500">
                                    {/* SVGs for stars */}
                                </div>
                                <p className="mt-0.5 text-base poppins-semibold text-gray-900 dark:text-gray-200">{testimonial.name.S}</p>
                                <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{testimonial.position.S}, {testimonial.company.S}</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                            {testimonial.testimonial.S}
                        </p>
                    </blockquote>
                </div>
            ))}
        </div>
    );
};

export default Testimonials_Template_AWS;