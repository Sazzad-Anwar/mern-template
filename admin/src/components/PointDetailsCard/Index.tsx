export type PointDetailsCardProps = {
    icon: React.ReactNode;
    title: string;
    subTitle: string;
};
const PointDetailsCard = ({ icon, title, subTitle }: PointDetailsCardProps) => {
    return (
        <div className="shadow-md hover:shadow-lg normal-transition px-4 py-3 border border-primary-500 rounded-md flex items-center bg-white">
            <div className="mr-5 p-2 flex justify-center bg-primary-100 text-primary-500 items-center rounded-full">
                {icon}
            </div>
            <div className="overflow-hidden">
                <p className="font-medium text-xl text-left">{title}</p>
                <p className="text-base truncate text-left">{subTitle}</p>
            </div>
        </div>
    );
};

export default PointDetailsCard;
