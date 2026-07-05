// Privacy-friendly page-view analytics via GoatCounter (free for personal
// sites, no cookies, GDPR-safe). To enable in three steps:
//   1. Sign up at https://www.goatcounter.com and pick a site code (subdomain).
//   2. In the GoatCounter site settings, add "goutham0110.github.io" as an
//      allowed domain.
//   3. Set GOATCOUNTER_CODE below to that site code (e.g. "goutham") and redeploy.
// While empty, this component renders nothing, so it is safe to ship disabled.
const GOATCOUNTER_CODE = "goutham0110";

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
