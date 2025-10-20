import React from "react";
import { HomeHeader, Utinities, ListOA, NewsSection } from "@components";
import PageLayout from "@components/layout/PageLayout";
import { APP_UTINITIES } from "@constants/utinities";
import { useStore } from "@store";
import Contacts from "./Contacts";
import Procedures from "./Procedures";

const HomePage: React.FunctionComponent = () => {
    const [organization] = useStore(state => [
        state.organization,
        state.getOrganization,
    ]);

    return (
        <PageLayout
            id="home-page"
            style={{marginTop:'0px'}}
            customHeader={
                <HomeHeader
                    title="Chi cục Thủy sản và Kiểm Ngư "
                    // name={organization?.name || ""}
                    name='Thành phố Cần Thơ'
                />
            }
        >
            <Utinities utinities={APP_UTINITIES} />
            <ListOA />
            <Contacts />
            <NewsSection />
        </PageLayout>
    );
};

export default HomePage;
