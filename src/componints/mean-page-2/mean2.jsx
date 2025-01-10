import fashion from "../../background/fashion.jpg";
import drawingfabric from "../../background/drawing-fabric.jpg";
import "./mean2.css";
import React from "react";

export default function Mean2() {
  return (
    <>
      <div className="info-box-r">
        <img className="imginfo-r" src={drawingfabric} alt="drawing-fabric" />
        <div class="title-with-line-r">
          <div className="information-r">
            <div className="grow">
              <div class="line-1"></div>
              <h1>رؤية الشركة</h1>
            </div>

            <p>
              تتطلع شركة بوينت الى المساهمة فى الأعمال المستقبلية التى تتماشى مع
              رؤية الدولة Egypt Vision2030 عن طريق تقديم جميع الخدمات المتطورة
              والإستغلال الأمثل للمواد المحلية ومشاركة الشركات العالمية للوصول
              الى أفكار غير تقليدية للوصول بشركتنا الى العالمية لتكون الداعم
              .الفنى الأول لجميع المشروعات القومية
            </p>
          </div>
        </div>
      </div>
      <div className="info-box-l">
        <img className="imginfo-l" src={fashion} alt="fashion"></img>
        <div class="title-with-line-l">
          <div className="information-l">
            <div className="grow">
              <h1>مهمة الشركة</h1>
              <div class="line-2"></div>
            </div>

            <p>
              مهمتنا هو تحقيق أعلى مستويات الجودة وتنفيذ جميع الأعمال بطريقة
              أمنه وتقديم افضل الخدمات والحلول الهندسية الغير تقليدية بانسب
              تكلفة
            </p>
          </div>
        </div>
      </div>
      <div className="info-p">
        <h1 className="info-p-h">الـــــجـــــودة</h1>
        <p className="info-p-p">
          “ بخصوص الجودة اننا نعمل جاهدينً علي تشغيل اجود المنسوجات لتقديمها
          .لعملائنا وذلك حسب اختيار العملاء من مواصفات “
        </p>
      </div>
    </>
  );
}
