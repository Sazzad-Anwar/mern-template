import { FC } from 'react';
import PointDetailsCard, { PointDetailsCardProps } from '../../components/PointDetailsCard/Index';
import { BiNews } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import AreaChart from '../../components/Charts/AreaChart/Index';
import GroupColumnChart from '../../components/Charts/GroupColumnChart/Index';

const Dashboard: FC = () => {
    let PointDetailsCardList: PointDetailsCardProps[] = [
        {
            icon: <BiNews size={30} />,
            title: '1,200',
            subTitle: 'News',
        },
        {
            icon: <BiNews size={30} />,
            title: '1,200',
            subTitle: 'Articles',
        },
        {
            icon: <HiUsers size={30} />,
            title: '1,200',
            subTitle: 'Users',
        },
        {
            icon: <FaUserCircle size={30} />,
            title: '10',
            subTitle: 'Roles',
        },
    ];

    return (
        <main>
            {/* point details card section */}
            <section className="text-center mt-5">
                <div
                    className={
                        'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'
                    }
                >
                    {PointDetailsCardList.map((card) => (
                        <PointDetailsCard
                            key={card.subTitle}
                            icon={card.icon}
                            title={card.title}
                            subTitle={card.subTitle}
                        />
                    ))}
                </div>
            </section>

            {/* chart section */}
            {/* <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 bg-white shadow-lg rounded-md">
                    <p className="text-xl font-medium mb-5">News Post Statistics</p>
                    <AreaChart />
                </div>
                <div className="p-5 bg-white shadow-lg rounded-md">
                    <p className="text-xl font-medium mb-5">News Post Statistics</p>
                    <GroupColumnChart />
                </div>
            </section> */}
        </main>
    );
};

export default Dashboard;
