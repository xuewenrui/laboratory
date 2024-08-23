import GlobalLayout from "@/layouts/GlobalLayout";
import {Layout} from "antd";
import BackgroundImage from "@/components/BackgroundImage";
import ContentLayout from "@/components/ContentLayout";

const Index=()=>{
    return(
        <GlobalLayout>
            <Layout>
                <BackgroundImage/>
                <div style={{width: 1200, margin: 'auto'}}>
                    <ContentLayout>
                        添加
                    </ContentLayout>
                </div>
            </Layout>
        </GlobalLayout>
    )
}


export default Index