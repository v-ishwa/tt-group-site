import History from '@/components/about/history'
import HistoryDetails from '@/components/about/historyDetails'
import Leadership from '@/components/about/leadership'
import Performance from '@/components/about/performance'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Clients from '@/components/home/Clients'


export default function About() {
    return (
        <>
            <Header />
            <History />
            <Clients/>
            <Performance/>
            <Leadership/>
            <HistoryDetails/>
            <Footer/>
        </>
    )
}
