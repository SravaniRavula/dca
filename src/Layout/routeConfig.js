import react from "react";
import Home from "../modules/Menu1/index";
import Organization from "../modules/Menu2/index";
import Rti from "../modules/Menu3/index";
import BannedDrugs from "../modules/Menu4/SubMenu1/index";
import ContactUs from "../modules/Menu5/index";
import Map from "../modules/Menu5/map";
import Webpolicies from "../Components/Footer/webpolicies";
import Help from "../Components/Footer/help";
import Notifications from "../Components/Notifications/notification";
import Error from "../Components/Error/error";
import Images from "../Components/Gallery/Images";
import SiteMap from "../modules/SiteMap/sitemap";
import About from "../Components/About/About";
import BloodBanks from "../Components/submenus/bloodbanks";
import StatuteImplemented from "../Components/submenus/statute";
import ObjectivesofDCA from "../Components/submenus/objectives";
import ClientsCharter from "../Components/submenus/clientscharter";




const routesConfig = [
  {
    path: "/nicapsc-dca/dcaHome",
    component: Home,
  },
  {
    path: "/nicapsc-dca/dcaorganization/",
    component: Organization,
  },
  {
    path: "/nicapsc-dca/dcarti",
    component: Rti,
  },
  {
    path: "/nicapsc-dca/dcapublicservices/DCAbanneddrugs",
    component: BannedDrugs,
  },
  {
    path: "/nicapsc-dca/dcanotifications",
    component: Notifications,
  },
  {
    path: "/nicapsc-dca/dcawebsitepolicies",
    component: Webpolicies,
  },
  {
    path: "/nicapsc-dca/dcahelp",
    component: Help,
  },
  {
    path: "/nicapsc-dca/dcacontact",
    component: ContactUs,
  },
  {
    path: "/nicapsc-dca/dcamap",
    component: Map,
  },
  {
    path: "/nicapsc-dca/dcaerror",
    component: Error,
  },
  {
    path: "/nicapsc-dca/dcaimages",
    component: Images,
  },
  {
    path: "/nicapsc-dca/dcasitemap",
    component: SiteMap,
  },
  {
    path: "/nicapsc-dca/dcaabout",
    component: About,
  },
  {
    path: "/nicapsc-dca/dcapublicservices/dcabloodbanks",
    component: BloodBanks,
  },
  {
    path: "/nicapsc-dca/dcamainmenu/dcastatuteimplemented",
    component: StatuteImplemented,
  },
  {
    path: "/nicapsc-dca/dcamainmenu/dcaobjectives",
    component: ObjectivesofDCA,
  },
  {
    path: "/nicapsc-dca/dcamainmenu/dcaclientscharter",
    component: ClientsCharter,
  },
];

export default routesConfig;
