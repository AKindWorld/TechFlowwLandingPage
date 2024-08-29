import React, { useEffect, useState } from 'react';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { ScanCommand } from '@aws-sdk/lib-dynamodb';
import facebookIcon from '/static/assets/Icons/Facebook.svg';
import twitterIcon from '/static/assets/Icons/Twitter.svg';
import linkedinIcon from '/static/assets/Icons/LinkedIn.svg';
import instagramIcon from '/static/assets/Icons/Instagram.svg';
import githubIcon from '/static/assets/Icons/GitHub.svg';
import mailIcon from '/static/assets/Icons/Email.svg';
import phoneIcon from '/static/assets/Icons/Phone.svg';
import linkIcon from '/static/assets/Icons/DefaultLink.svg';
import nullIcon from '/static/assets/Icons/NullLink.svg';

const iconMap = {
    facebook: facebookIcon,
    twitter: twitterIcon,
    linkedin: linkedinIcon,
    instagram: instagramIcon,
    github: githubIcon,
    mail: mailIcon,
    phone: phoneIcon,
    default: linkIcon,
    null: nullIcon,
};

const LinkWithIcon = ({ link, iconSrc }) => {
    const iconSrcUrl = iconMap[iconSrc] || null;
  
    return (
      <div className="link-with-icon">
        <a href={link} target="_blank" rel="noopener noreferrer" className='block pl-2 pr-2 mt-0 mb-0 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600'>
          <img src={iconSrcUrl} alt={iconSrc} className="icon-class size-6 rounded-full object-cover aspect-square opacity-75 hover:opacity-100" />
        </a>
      </div>
    );
};

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
            <div className='grid md:grid-cols-2 lg:grid-cols-3 m-4 md:p-4'>
                {boardMembers.map((member, index) => (
                    <div className="mb-8 sm:break-inside-avoid m-6 group" key={index}>
                        <blockquote className="rounded-2xl bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src={member.image}
                                    className={`size-14 rounded-full object-cover group-hover:ring-4 group-hover:ring-[${member.color}] transition-all duration-150`}
                                />
                                <div>
                                    <p className="mt-0.5 text-base poppins-semibold text-gray-900 dark:text-gray-200">{member.name}</p>
                                    <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{member.position}</p>
                                </div>
                            </div>
                            <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm font-normal">
                                <span className='font-bold'>Skills:</span>
                                <ul className='list-disc ml-4 mt-1'>
                                    <li>{member.skills[0]}</li>
                                    <li>{member.skills[1]}</li>
                                    <li>{member.skills[2]}</li>
                                </ul>
                            </p>
                            <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex justify-center pt-2 space-x-4 align-center">
                                <LinkWithIcon link={member.link1} iconSrc={member.link1iconsrc} />
                                <LinkWithIcon link={member.link2} iconSrc={member.link2iconsrc} />
                                <LinkWithIcon link={member.link3} iconSrc={member.link3iconsrc} />
                                <LinkWithIcon link={member.link4} iconSrc={member.link4iconsrc} />
                            </div>
                        </blockquote>
                    </div>
                ))}
            </div>

            <h3 className="text-center text-sm poppins-semibold text-teal-500 sm:text-lg pb-4 mt-16">
                    Technical Experts
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 m-4 md:p-4'>
                {technicalExperts.map((member, index) => (
                    <div className="mb-8 sm:break-inside-avoid m-6 group" key={index}>
                        <blockquote className="rounded-2xl bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src={member.image}
                                    className={`size-14 rounded-full object-cover group-hover:ring-4 group-hover:ring-[${member.color}] transition-all duration-150`}
                                />
                                <div>
                                    <p className="mt-0.5 text-base poppins-semibold text-gray-900 dark:text-gray-200">{member.name}</p>
                                    <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{member.position}</p>
                                </div>
                            </div>
                            <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm font-normal">
                                <span className='font-bold'>Skills:</span>
                                <ul className='list-disc ml-4 mt-1'>
                                    <li>{member.skills[0]}</li>
                                    <li>{member.skills[1]}</li>
                                    <li>{member.skills[2]}</li>
                                </ul>
                            </p>
                            <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex justify-center pt-2 space-x-4 align-center">
                                <LinkWithIcon link={member.link1} iconSrc={member.link1iconsrc} />
                                <LinkWithIcon link={member.link2} iconSrc={member.link2iconsrc} />
                                <LinkWithIcon link={member.link3} iconSrc={member.link3iconsrc} />
                                <LinkWithIcon link={member.link4} iconSrc={member.link4iconsrc} />
                            </div>
                        </blockquote>
                    </div>
                ))}
            </div>

            <h3 className="text-center text-sm poppins-semibold text-teal-500 sm:text-lg pb-4 mt-16">
                    Technical Team Members
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 m-4 md:p-4'>
                {technicalMembers.map((member, index) => (
                    <div className="mb-8 sm:break-inside-avoid m-6 group" key={index}>
                        <blockquote className="rounded-2xl bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src={member.image}
                                    className={`size-14 rounded-full object-cover group-hover:ring-4 group-hover:ring-[${member.color}] transition-all duration-150`}
                                />
                                <div>
                                    <p className="mt-0.5 text-base poppins-semibold text-gray-900 dark:text-gray-200">{member.name}</p>
                                    <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{member.position}</p>
                                </div>
                            </div>
                            <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm font-normal">
                                <span className='font-bold'>Skills:</span>
                                <ul className='list-disc ml-4 mt-1'>
                                    <li>{member.skills[0]}</li>
                                    <li>{member.skills[1]}</li>
                                    <li>{member.skills[2]}</li>
                                </ul>
                            </p>
                            <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex justify-center pt-2 space-x-4 align-center">
                                <LinkWithIcon link={member.link1} iconSrc={member.link1iconsrc} />
                                <LinkWithIcon link={member.link2} iconSrc={member.link2iconsrc} />
                                <LinkWithIcon link={member.link3} iconSrc={member.link3iconsrc} />
                                <LinkWithIcon link={member.link4} iconSrc={member.link4iconsrc} />
                            </div>
                        </blockquote>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioProfiles;