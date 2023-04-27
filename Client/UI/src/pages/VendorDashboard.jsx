import React from 'react'
import Sidebar from '../components/Sidebar'
import NavbarOne from '../components/NavbarOne'
import Header from '../components/Header'
import { Card, Grid } from '@mantine/core'
import TableOne from '../components/TableOne'

const VendorDashboard = () => {
    return (
        <div>
            <div className='main'>
                <div className='gradient' />
            </div>

            <div className='app'>
                <NavbarOne />
            </div>

            <Grid columns={2}>
                <Sidebar span={2} />
                <Card miw={860} mx="auto" p={30} withBorder>
                <Header px={10} py={10} span={10} category="App" title="Incomming Offers" />
                <TableOne />
                </Card>
            </Grid>
        </div>
    )
}

export default VendorDashboard