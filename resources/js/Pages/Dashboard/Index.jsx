import CardDashboard from './CardDashboard';
import { FaCalendar, FaClipboard, FaComments, FaDollarSign } from 'react-icons/fa';
import ChartDashboard from './ChartDashboard';
import MainLayout from '../../Layouts/MainLayout';

const Index = () => {
    return (
        <>
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <CardDashboard color="primary" textTitle="Cashflow" text="Rp. 2,337,884,470" icon={<FaCalendar />} />
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <CardDashboard color="success" textTitle="Earnings (Annual)" text="$215,000" icon={<FaDollarSign />} />
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <CardDashboard color="info" textTitle="Tasks" text="50%" icon={<FaClipboard />} />
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <CardDashboard color="warning" textTitle="Pending Requests" text="18" icon={<FaComments />} />
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <ChartDashboard />
                </div>
            </div>
        </>
    );
};

Index.layout = (page) => <MainLayout children={page} title="Dashboard Page" />;

export default Index;
