function ModuleForm() {
  return (
    <>
      <div className="fields">
        <dl>
          <dt className="required">氏名</dt>
          <dd>
            <input type="text" name="your-name" placeholder="山田太朗" />
          </dd>
        </dl>
        <dl>
          <dt className="required">ふりがな</dt>
          <dd>
            <input type="text" name="your-kana" placeholder="やまだたろう" />
          </dd>
        </dl>
        <dl>
          <dt className="required">住所</dt>
          <dd>
            <input type="text" name="your-zip" placeholder="000-0000" />
            <input type="text" name="your-address" placeholder="新潟県新潟市" />
          </dd>
        </dl>
        <dl>
          <dt className="required">メールアドレス</dt>
          <dd>
            <input type="email" name="your-email" placeholder="xxx@gmail.com" />
          </dd>
        </dl>
        <dl>
          <dt className="required">電話番号</dt>
          <dd>
            <input type="tel" name="your-tel" placeholder="000-0000-0000" />
          </dd>
        </dl>
        <dl>
          <dt className="required">備考・メッセージ</dt>
          <dd>
            <textarea
              name="your-content"
              placeholder="ご入力ください"
            ></textarea>
          </dd>
        </dl>
      </div>
      <p className="consent">
        <a href="/privacy-policy/">プライバシーポリシー</a>に同意しました。
      </p>
      <div className="submit">
        <button className="btn-tertiary" type="submit">
          送信する
        </button>
      </div>
    </>
  );
}

export { ModuleForm };
