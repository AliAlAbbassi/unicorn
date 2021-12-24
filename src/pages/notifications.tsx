import { NextLayoutComponentType } from "next";
import styled from 'styled-components'
import React from "react";
import Layout from "../layouts/Layout";
import { NotificationData } from "../../data";
import { NotificationCard } from "../components/NotificationCard";

interface notificationsProps { }

const notifications: NextLayoutComponentType<notificationsProps> = ({ }) => {
    return (
        <Container>
            {NotificationData.map(noti => (
                <>
                    <NotificationCard title={noti.title} content={noti.content} key={noti.id} />
                    <Divider />
                </>
            ))}
        </Container>
    );
};

const Container = styled.div({})
const Divider = styled.div({
    borderTop: 'black solid 1px'
})

notifications.getLayout = (page) => <Layout layoutType="Default">{page}</Layout>;

export default notifications