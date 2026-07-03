// Privacy-friendly page-view analytics via GoatCounter (free for personal
// sites, no cookies, GDPR-safe). To enable: create an account at
// https://www.goatcounter.com, then set GOATCOUNTER_CODE to your site code
// (the subdomain you picked, e.g. "goutham").
const GOATCOUNTER_CODE = "";

export default function Analytics() {
    if (!GOATCOUNTER_CODE) return null;
    return (
        <script
            async
            data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
            src="https://gc.zgo.at/count.js"
        />
    );
}
