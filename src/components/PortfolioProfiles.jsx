import React, { useEffect, useState } from 'react';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { ScanCommand } from '@aws-sdk/lib-dynamodb';

const PortfolioProfiles = () => {
    const [boardMembers, setBoardMembers] = useState([]);
    const [technicalExperts, setTechnicalExperts] = useState([]);
    const [technicalMembers, setTechnicalMembers] = useState([]);

    useEffect(() => {
        const fetchDataFromTable = async (tableName) => {
            const client = new DynamoDBClient({
                region: import.meta.env.VITE_REACT_APP_DB_REGION,
                credentials: {
                    accessKeyId: import.meta.env.VITE_REACT_APP_DB_ACCESS_KEY_ID,
                    secretAccessKey: import.meta.env.VITE_REACT_APP_DB_SECRET_ACCESS_KEY,
                },
            });

            const params = {
                TableName: tableName,
            };

            try {
                const command = new ScanCommand(params);
                const data = await client.send(command);
                return data.Items;
            } catch (err) {
                console.error('Error fetching data from DynamoDB:', err);
                return [];
            }
        };

        const fetchAllData = async () => {
            const boardMembersData = await fetchDataFromTable('profiles_boardmembers');
            const technicalExpertsData = await fetchDataFromTable('profiles_technicalexperts');
            const technicalMembersData = await fetchDataFromTable('profiles_technicalmembers');

            setBoardMembers(boardMembersData);
            setTechnicalExperts(technicalExpertsData);
            setTechnicalMembers(technicalMembersData);
        };

        fetchAllData();
    }, []);
    
    return (
        <div>
            <h3 className="text-center text-sm poppins-semibold text-teal-500 sm:text-lg pb-4 mt-8">
                    Board Members
            </h3>
            <div className='mt-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {boardMembers.map((member, index) => (
                        <div key={index} className="flex flex-row md:flex-col justify-center p-6 rounded-xl sm:px-12 bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10">
                            <img src={member.image} alt="" className="w-16 h-16 md:w-24 md:h-24 m-4 md:mx-auto rounded-full bg-gray-500 dark:bg-gray-500 aspect-square" 
                                onerror={(e) => (e.target.src = "/static/assets/Media/DefaultAvatar01.png")} />
                            <div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-300">
                                <div className="my-2 space-y-1">
                                    <h2 className="text-base font-semibold">{member.name}</h2>
                                    <p className="px-5 text-xs text-gray-400 dark:text-gray-600">{member.position}</p>
                                </div>
                                <div className="flex justify-center pt-2 space-x-4 align-center">
                                    <a rel="noopener noreferrer" href={member.link1} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                        <img
                                            alt=""
                                            src={member.link1iconsrc}
                                            className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                        />
                                    </a>
                                    <a rel="noopener noreferrer" href={member.link2} aria-label="Link2" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                        <img
                                            alt=""
                                            src={member.link2iconsrc}
                                            className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                        />
                                    </a>
                                    <a rel="noopener noreferrer" href={member.link3} aria-label="Link3" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                        <img
                                            alt=""
                                            src={member.link3iconsrc}
                                            className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                        />
                                    </a>
                                    <a rel="noopener noreferrer" href={member.link4} aria-label="Link4" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                        <img
                                            alt=""
                                            src={member.link4iconsrc}
                                            className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
            <h3 className="text-center text-sm poppins-semibold text-teal-500 sm:text-lg pb-4 mt-16">
                    Technical Experts
            </h3>
            <div className='mt-2 sm:columns-2 sm:gap-6 lg:columns-2 lg:gap-8 p-10 m-16'>
                {technicalExperts.map((expert, index) => (
                    <div className="mb-8 sm:break-inside-avoid" key={index}>
                        <blockquote className="rounded-2xl bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src={expert.image}
                                    className="size-14 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                />
                                <div>
                                    <p className="mt-0.5 text-base poppins-semibold text-gray-900 dark:text-gray-200">{expert.name}</p>
                                    <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{expert.position}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                                {expert.skills[1]}
                            </p>
                            <div className="flex justify-center pt-2 space-x-4 align-center">
                                <a rel="noopener noreferrer" href={expert.link1} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={expert.link1iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                                <a rel="noopener noreferrer" href={expert.link2} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={expert.link2iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                                <a rel="noopener noreferrer" href={expert.link3} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={expert.link3iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                                <a rel="noopener noreferrer" href={expert.link4} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={expert.link4iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                            </div>
                        </blockquote>
                    </div>
                ))}
            </div>
            <h3 className="text-center text-sm poppins-semibold text-teal-500 sm:text-lg pb-4 mt-16">
                    Technical Team Members
            </h3>
            <div className='mt-2 sm:columns-2 sm:gap-6 lg:columns-4 lg:gap-8 p-10 m-16'>
                {technicalMembers.map((member, index) => (
                    <div className="mb-8 sm:break-inside-avoid" key={index}>
                        <blockquote className="rounded-2xl bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src={member.image}
                                    className="size-14 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                />
                                <div>
                                    <p className="mt-0.5 text-base poppins-semibold text-gray-900 dark:text-gray-200">{member.name}</p>
                                    <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{member.position}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                                {member.skills[1]}
                            </p>
                            <div className="flex justify-center pt-2 space-x-4 align-center">
                                <a rel="noopener noreferrer" href={member.link1} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={member.link1iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                                <a rel="noopener noreferrer" href={member.link2} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={member.link2iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                                <a rel="noopener noreferrer" href={member.link3} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={member.link3iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                                <a rel="noopener noreferrer" href={member.link4} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={member.link4iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                            </div>
                        </blockquote>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioProfiles;