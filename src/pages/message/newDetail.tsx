import GlobalLayout from "@/layouts/GlobalLayout";
import {Card, Layout} from "antd";
import ContentLayout from "@/components/ContentLayout";
import BackgroundImage from "@/components/BackgroundImage";

function Index() {

    return (

        <GlobalLayout>
            <Layout>
                <BackgroundImage/>
                <div style={{width: 1200, margin: 'auto'}}>
                    <ContentLayout>
                        新闻
                    </ContentLayout>
                </div>
            </Layout>
        </GlobalLayout>
    )
}

export default Index