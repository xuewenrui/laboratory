
import GlobalLayout from "@/layouts/GlobalLayout";
import {Layout} from "antd";
import BackgroundImage from "@/components/BackgroundImage";
import ContentLayout from "@/components/ContentLayout";
import React from "react";

const Introduction=()=>{
    return(
        <GlobalLayout>
            <Layout>
                <BackgroundImage/>
                <div style={{width: 1200, margin: 'auto'}}>
                    <ContentLayout>
                        成就
                    </ContentLayout>
                </div>
            </Layout>
        </GlobalLayout>
    )
}


export default Introduction