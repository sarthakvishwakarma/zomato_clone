import React, { useState } from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tsbOptions'
import Footer from '../../components/common/footer'
import Delivery from '../../components/Delivery'
import DiningOut from '../../components/diningOut'
import Nightlife from '../../components/nightlife'

const Homepage = () => {

    const [activeTab, setActiveTabs] = useState("Delivery")
    return (
        <div>
            <Header />
            <TabOptions activeTabs={activeTab} setActiveTabs={setActiveTabs} />

            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    )
}

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery/>
        case "Dining Out":
            return <DiningOut/>
        case "Nightlife":
            return <Nightlife/>
        default: return <Delivery/>
    }
}

export default Homepage