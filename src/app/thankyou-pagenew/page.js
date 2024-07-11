import React from 'react'
import Banner from '@/src/components/NewThankYou/Banner' 
import GlobalPresence from '@/src/components/servicePage/GlobalPresence/GlobalPresence'
import SuccessfulApp from '@/src/components/servicePage/SuccessfulApp/SuccessfulApp'
import Conviced from '@/src/components/NewThankYou/Convinced/Convinced'

const page = () => {
    return (
        <>
            <Banner />
            <Conviced />
            <SuccessfulApp />
            <GlobalPresence />
        </>
    )
}

export default page
