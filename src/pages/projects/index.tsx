import GlobalLayout from "@/layouts/GlobalLayout";
import {Card, Layout} from "antd";
import BackgroundImage from "@/components/BackgroundImage";
import ContentLayout from "@/components/ContentLayout";
import React from "react";

function Index() {
    return(
        <GlobalLayout>
            <Layout>
                <BackgroundImage/>
                <div style={{width: 1200, margin: 'auto'}}>
                    <ContentLayout>
                    </ContentLayout>
                </div>
            </Layout>
        </GlobalLayout>
    )
}

export default Index