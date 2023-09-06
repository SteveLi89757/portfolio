import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";

export default function MailchimpForm() {
  const postUrl =
    "https://gmail.us10.list-manage.com/subscribe/post?u=64eccd104152803dbe3957dfc&id=b4cceb7c0d";

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
}
