import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModuleMv from "@/components/ModuleMv";
import {
  SectionTitle,
  SectionTitleContentWidth,
} from "@/components/ModuleSectionTitle";
import {
  ImgTxtContainer,
  ImgTxtBox,
  ImgTxtBoxReverse,
} from "@/components/ModuleImgTxtBox";
import {
  LayoutSection,
  LayoutSectionPt0,
  LayoutSectionPt0WithoutWidth,
} from "@/components/LayoutSection";
import { ExampleContainer, ExampleBox } from "@/components/ModuleExample";
import {
  SquareBlockContainer,
  SquareBlockItem,
} from "@/components/ModuleSquareBlock";
import { BtnPrimary } from "@/components/ModuleBtnPrimary";
import { DlDtDd } from "@/components/ModuleDlContainer";

export default function About() {
  const outlines = [
    {
      head: "商号",
      cont: "テストテキストテストテキスト",
    },
    {
      head: "代表者",
      cont: "テストテキストテストテキスト",
    },
    {
      head: "資本金",
      cont: "テストテキストテストテキスト",
    },
    {
      head: "社員数",
      cont: "テストテキストテストテキスト",
    },
  ];

  const licenses = [
    { name: "基本情報技術者試験" },
    { name: "基本情報技術者試験" },
    { name: "基本情報技術者試験" },
    { name: "基本情報技術者試験" },
    { name: "基本情報技術者試験" },
  ];

  const histories = [
    {
      head: "1999年9月",
      cont: "文部科学省の指定業者となる",
    },
    {
      head: "1999年9月",
      cont: "文部科学省の指定業者となる",
    },
    {
      head: "1999年9月",
      cont: "文部科学省の指定業者となる",
    },
    {
      head: "1999年9月",
      cont: "文部科学省の指定業者となる",
    },
  ];

  const strengthes = [
    {
      img: "/images/page/business/strength_11.png",
      ttl: "信頼1",
      txt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, distinctio voluptate. Aliquam voluptate nobis non deleniti aperiam natus assumenda, voluptatibus cum inventore laudantium, doloremque, ex sed. Maxime quo voluptate exercitationem!",
    },
    {
      img: "/images/page/business/strength_12.png",
      ttl: "信頼2",
      txt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, distinctio voluptate. Aliquam voluptate nobis non deleniti aperiam natus assumenda, voluptatibus cum inventore laudantium, doloremque, ex sed. Maxime quo voluptate exercitationem!",
    },
    {
      img: "/images/page/business/strength_13.png",
      ttl: "信頼3",
      txt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, distinctio voluptate. Aliquam voluptate nobis non deleniti aperiam natus assumenda, voluptatibus cum inventore laudantium, doloremque, ex sed. Maxime quo voluptate exercitationem!",
    },
  ];

  const services = [
    {
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum natus consectetur explicabo. Eligendi excepturi nostrum culpa perspiciatis, nisi ducimus illum libero dolore nesciunt, laudantium architecto corporis quidem molestiae vel?",
    },
    {
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum natus consectetur explicabo. Eligendi excepturi nostrum culpa perspiciatis, nisi ducimus illum libero dolore nesciunt, laudantium architecto corporis quidem molestiae vel?",
    },
    {
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum natus consectetur explicabo. Eligendi excepturi nostrum culpa perspiciatis, nisi ducimus illum libero dolore nesciunt, laudantium architecto corporis quidem molestiae vel?",
    },
    {
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum natus consectetur explicabo. Eligendi excepturi nostrum culpa perspiciatis, nisi ducimus illum libero dolore nesciunt, laudantium architecto corporis quidem molestiae vel?",
    },
    {
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum natus consectetur explicabo. Eligendi excepturi nostrum culpa perspiciatis, nisi ducimus illum libero dolore nesciunt, laudantium architecto corporis quidem molestiae vel?",
    },
    {
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum natus consectetur explicabo. Eligendi excepturi nostrum culpa perspiciatis, nisi ducimus illum libero dolore nesciunt, laudantium architecto corporis quidem molestiae vel?",
    },
  ];

  const clients = [
    {
      ttl: "△△△株式会社",
    },
    {
      ttl: "△△△株式会社",
    },
    {
      ttl: "△△△株式会社",
    },
    {
      ttl: "△△△株式会社",
    },
  ];

  const areas = [
    {
      img: "/images/page/business/strength_11.png",
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/images/page/business/strength_11.png",
      ttl: "U字工事",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const occupations = [
    {
      img: "/images/page/recruit/img_01.jpg",
      ttl: "エンジニア",
      txt: "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      img: "/images/page/recruit/img_02.jpg",
      ttl: "エンジニア",
      txt: "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      img: "/images/page/recruit/img_03.jpg",
      ttl: "エンジニア",
      txt: "ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
  ];

  const interviews = [
    {
      img: "/images/page/recruit/img_01.jpg",
      nameJa: "メッシ",
      nameEn: "Lionel Andres Messi",
      role: "バルセロナ/FW",
      year: "1987",
    },
    {
      img: "/images/page/recruit/img_02.jpg",
      nameJa: "メッシ",
      nameEn: "Lionel Andres Messi",
      role: "バルセロナ/FW",
      year: "1987",
    },
    {
      img: "/images/page/recruit/img_03.jpg",
      nameJa: "メッシ",
      nameEn: "Lionel Andres Messi",
      role: "バルセロナ/FW",
      year: "1987",
    },
    {
      img: "/images/page/recruit/img_03.jpg",
      nameJa: "メッシ",
      nameEn: "Lionel Andres Messi",
      role: "バルセロナ/FW",
      year: "1987",
    },
  ];

  const environments = [
    {
      img: "/images/page/recruit/img_01.jpg",
      ttl: "教育のサポートが手厚い環境",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/images/page/recruit/img_01.jpg",
      ttl: "教育のサポートが手厚い環境",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "/images/page/recruit/img_01.jpg",
      ttl: "教育のサポートが手厚い環境",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const datum = [
    {
      img: "",
      alt: "データで見る株式会社OO",
    },
    {
      img: "",
      alt: "データで見る株式会社OO",
    },
    {
      img: "",
      alt: "データで見る株式会社OO",
    },
  ];

  const studentConditionTables = [
    {
      head: "業務内容",
      cont: "ダミーテキストダミーテキスト",
    },
    {
      head: "勤務地",
      cont: "ダミーテキストダミーテキスト",
    },
    {
      head: "勤務時間",
      cont: "8：00～17：00（休憩60分）\n\n\n現場によっては、緊急の時間外対応、夜間工事があります。",
    },
    {
      head: "休日休暇",
      cont: "原則週休二日制：日曜日、祝日、その他（会社カレンダーによります）<br>その他、有給休暇、夏期休暇、年末年始休暇<br>年間休日数：110日",
    },
    {
      head: "福利厚生",
      cont: "社会保険、健康保険、厚生年金保険、雇用保険、労災保険、資格取得支援制度、財形貯蓄制度、制服貸与、定期健康診断、退職金共済加入制度",
    },
    {
      head: "給与",
      cont: "大学卒 215,000円～<br>高校卒 200,000円～<br>昇給：年1回<br>試用期間：3か月<br>試用期間中の労働条件：同条件",
    },
  ];

  const careerConditionTables = [
    {
      head: "業務内容",
      cont: "ダミーテキストダミーテキスト",
    },
    {
      head: "勤務地",
      cont: "ダミーテキストダミーテキスト",
    },
    {
      head: "勤務時間",
      cont: "8：00～17：00（休憩60分）<br><br>現場によっては、緊急の時間外対応、夜間工事があります。",
    },
    {
      head: "休日休暇",
      cont: "原則週休二日制：日曜日、祝日、その他（会社カレンダーによります）<br>その他、有給休暇、夏期休暇、年末年始休暇<br>年間休日数：110日",
    },
    {
      head: "福利厚生",
      cont: "社会保険、健康保険、厚生年金保険、雇用保険、労災保険、資格取得支援制度、財形貯蓄制度、制服貸与、定期健康診断、退職金共済加入制度",
    },
    {
      head: "給与",
      cont: "大学卒 215,000円～<br>高校卒 200,000円～<br>昇給：年1回<br>試用期間：3か月<br>試用期間中の労働条件：同条件",
    },
  ];

  return (
    <div id="wrapper">
      <Header />
      <main>
        <ModuleMv />
        <LayoutSection sectionId="about-intro">
          <ImgTxtBoxReverse
            img="/images/home/business_01.jpg"
            ttl="タイトル"
            subttl="ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト"
          />
        </LayoutSection>
        <LayoutSectionPt0 sectionId="about-outline">
          <SectionTitle ttl="outline" subttl="会社概要" />
          <div className="m-dl-container">
            {outlines.map((outline) => (
              <dl>
                <dt>{outline["head"]}</dt>
                <dd>{outline["cont"]}</dd>
              </dl>
            ))}
          </div>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="about-license">
          <SectionTitle ttl="license" subttl="取得資格" />
          <ul className="m-list-container">
            {licenses.map((license) => (
              <li>{license["name"]}</li>
            ))}
          </ul>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="about-history">
          <SectionTitle ttl="history" subttl="沿革" />
          <div className="m-dl-container">
            {histories.map((history) => (
              <dl>
                <dt>{history.head}</dt>
                <dd>{history.cont}</dd>
              </dl>
            ))}
          </div>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="about-access">
          <SectionTitleContentWidth ttl="access" subttl="アクセス" />
          <div className="content-box">
            <div className="content-width-narrow">
              <div className="headquarters">
                <h3 className="ttl ttl-large">本社</h3>
                <div className="img-box">
                  <Image
                    src="/images/home/business_03.jpg"
                    alt="事業内容3"
                    className="fadein-trigger"
                    width="920"
                    height="476"
                  />
                </div>
                <div className="txt-area">
                  <div className="txt">
                    <p>〒950-2001 新潟県新潟市西区青山新町</p>
                    <p>
                      TEL.
                      <a href="tel:000-000-0000" className="inter tel">
                        000-000-0000
                      </a>
                    </p>
                  </div>
                  <div className="btn-wrap">
                    <a href="" className="c-maps ex_link" target="_blank">
                      GoogleMapsはこちら
                    </a>
                  </div>
                </div>
              </div>
              <div className="branches">
                <div className="txt-area">
                  <h3 className="ttl ttl-large">西蒲営業所</h3>
                  <div className="txt">
                    <p>〒950-2001 新潟県新潟市西区青山新町-3</p>
                    <p>
                      TEL.
                      <a href="tel:080-9553-8864" className="inter tel">
                        080-9553-8864
                      </a>
                        
                      <br className="sp-only" />
                      FAX. <span className="inter">0256-72-2430</span>
                    </p>
                  </div>
                </div>
                <div className="btn-wrap">
                  <a href="" className="c-maps ex_link" target="_blank">
                    GoogleMapsはこちら
                  </a>
                </div>
              </div>
            </div>
          </div>
        </LayoutSectionPt0>
        <LayoutSection sectionId="business-intro">
          <SectionTitle ttl="strength" subttl="強み" />
          <ExampleContainer containerClass="m-example-container col-3">
            {strengthes.map((strength) => (
              <ExampleBox
                imgSrc={strength.img}
                imgClass=""
                imgWidth="365"
                imgHeight="274"
                ttl={strength.ttl}
                txt={strength.txt}
              />
            ))}
          </ExampleContainer>
        </LayoutSection>
        <LayoutSectionPt0 sectionId="business-service">
          <SectionTitle ttl="service" subttl="サービス" />
          <SquareBlockContainer containerClass="m-service-container">
            {services.map((service) => (
              <SquareBlockItem ttl={service.ttl} txt={service.txt} />
            ))}
          </SquareBlockContainer>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="business-client">
          <SectionTitle ttl="client" subttl="主要取引先" />
          <div className="m-rectangle-container">
            {clients.map((client) => (
              <div className="item-box">{client["ttl"]}</div>
            ))}
          </div>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="business-area">
          <SectionTitle ttl="area" subttl="対応エリア" />
          <ExampleContainer containerClass="m-example-container col-2">
            {areas.map((area) => (
              <ExampleBox
                imgSrc={area.img}
                imgClass=""
                imgWidth="365"
                imgHeight="274"
                ttl={area.ttl}
                txt={area.txt}
              />
            ))}
          </ExampleContainer>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="business-area">
          <SectionTitle ttl="quality" subttl="品質方針" />
          <ImgTxtBox
            imgSrc="/images/home/business_03.jpg"
            imgClass="fadein-trigger"
            imgWidth="495"
            imgHeight="300"
            ttl="ISO9001取得"
            txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumquefugiat velit quos eveniet magni rem dicta minus utnecessitatibus repellat debitis explicabo, harum, optio,doloremque voluptatibus laboriosam impedit cupiditate nostrum."
          />
        </LayoutSectionPt0>
        <LayoutSection sectionId="recruit-intro">
          <div className="content-box">
            <p className="message">
              地域の発展のために、
              <br className="sp-only" />
              生活インフラを整えます
              <br />
              株式会社OOは、
              <span className="motion-bg-green bg-slide-trigger">
                一人一人の尊厳を尊重
              </span>
              します。
            </p>
          </div>
        </LayoutSection>
        <LayoutSectionPt0 sectionId="recruit-occupation">
          <SectionTitle ttl="occupation" subttl="職種を知る" />
          <ImgTxtContainer>
            {occupations.map((occupation) => (
              <ImgTxtBox
                imgSrc={occupation.img}
                imgClassName="fadein-trigger"
                imgWidth="500"
                imgHeight="333"
                ttl={occupation.ttl}
                txt={occupation.txt}
              />
            ))}
          </ImgTxtContainer>
        </LayoutSectionPt0>
        <LayoutSectionPt0WithoutWidth sectionId="recruit-interview">
          <SectionTitleContentWidth ttl="interview" subttl="社員インタビュー" />
          <div className="m-interview-list">
            {interviews.map((interview) => (
              <Link href="/interview/01/" className="item-box fadein-trigger">
                <div className="img-box">
                  <Image
                    src={interview["img"]}
                    alt="採用情報インタビュー"
                    className="fadein-trigger"
                    width="400"
                    height="520"
                  />
                </div>
                <div className="txt-box">
                  <p className="name">
                    <span className="ja">{interview["nameJa"]}</span>
                    <span className="en">{interview["nameEn"]}</span>
                  </p>
                  <p className="info">
                    {interview["role"]}/{interview["year"]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <BtnPrimary
            url="interview"
            txt="一覧はこちら"
            className="btn-box center-center"
          />
        </LayoutSectionPt0WithoutWidth>
        <LayoutSectionPt0 sectionId="recruit-environment">
          <SectionTitle ttl="environment" subttl="働く環境" />
          {environments.map((env) => (
            <ImgTxtBox
              imgSrc={env.img}
              imgClassName="fadein-trigger"
              imgWidth="600"
              imgHeight="400"
              ttl={env.ttl}
              txt={env.txt}
            />
          ))}
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="recruit-data">
          <SectionTitle ttl="data of oo" subttl="データで見る株式会社OO" />
          <div className="data-container">
            {datum.map((data) => (
              <div className="img-box">
                <Image
                  src={data.img}
                  alt={data.alt}
                  className="fadein-trigger"
                  width="359"
                  height="359"
                />
              </div>
            ))}
          </div>
        </LayoutSectionPt0>
        <LayoutSectionPt0 sectionId="recruit-requirement">
          <SectionTitle ttl="requirement" subttl="募集要項" />
          <div className="content-box">
            <div className="m-tab-panel">
              <ul className="tab-group">
                <li className="tab is-active">
                  <span>新卒採用</span>
                </li>
                <li className="tab">
                  <span>中途採用</span>
                </li>
              </ul>
              <div className="panel-group">
                <div className="panel is-show">
                  <h3 className="ttl ttl-large">新卒採用</h3>
                  <div className="m-dl-container">
                    {studentConditionTables.map((condition) => (
                      <DlDtDd head={condition.head} cont={condition.cont} />
                    ))}
                  </div>
                </div>
                <div className="panel">
                  <h3 className="ttl ttl-large">中途採用</h3>
                  <div className="m-dl-container">
                    {careerConditionTables.map((condition) => (
                      <DlDtDd head={condition.head} cont={condition.cont} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutSectionPt0>
      </main>
      <Footer />
    </div>
  );
}
