import Header from "@/components/Header";
import ModuleMv from "@/components/ModuleMv";
import Footer from "@/components/Footer";
import { ModuleForm } from "@/components/ModuleForm";
import { LayoutSection } from "@/components/LayoutSection";
import { SectionTitle } from "@/components/ModuleSectionTitle";

export default function Contact() {
  return (
    <div id="wrapper">
      <Header />
      <main>
        <ModuleMv />
        <LayoutSection sectionId="recruit-entry">
          <SectionTitle ttl="entry" subttl="エントリー" />
          <div id="form-box">
            <form action="https://ssgform.com/s/hOOcV8reaXzU" method="POST">
              <ModuleForm />
            </form>
          </div>
        </LayoutSection>
      </main>
      <Footer />
    </div>
  );
}
