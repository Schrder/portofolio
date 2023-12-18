import * as BerlijnDuitsland2022 from "../pages/fragments/berlijn-duitsland-2022.md";
import * as FunatsuJapan2017 from "../pages/fragments/funatsu-japan-2017.md";
import * as FransumNederland2017 from "../pages/fragments/fransum-nederland-2017.md";
import * as Tanabe2Japan2017 from "../pages/fragments/tanabe-2-japan-2017.md";
import * as DarelkebdaniMarokko2015 from "../pages/fragments/darelkebdani-marokko-2015.md";
import * as JeruzalemIsrael2014 from "../pages/fragments/jeruzalem-israel-2014.md";
import * as AmsterdamNederland2022 from "../pages/fragments/amsterdam-nederland-2022.md";
import * as ArdabilIran2016 from "../pages/fragments/ardabil-iran-2016.md";
import * as Isfahan2Iran2016 from "../pages/fragments/isfahan-2-iran-2016.md";
import * as FujikawaguchikoJapan2017 from "../pages/fragments/fujikawaguchiko-japan-2017.md";
import * as LissabonPortugal2023 from "../pages/fragments/lissabon-portugal-2023.md";
import * as LissabonPortugal2015 from "../pages/fragments/lissabon-portugal-2015.md";
import * as TanabeJapan2017 from "../pages/fragments/tanabe-japan-2017.md";
import * as Geiranger2Noorwegen2022 from "../pages/fragments/geiranger-2-noorwegen-2022.md";
import * as Isfahan3Iran2016 from "../pages/fragments/isfahan-3-iran-2016.md";
import * as TokyoJapan2017 from "../pages/fragments/tokyo-japan-2017.md";
import * as SeoulKorea2019 from "../pages/fragments/seoul-korea-2019.md";
import * as Isfahan4Iran2016 from "../pages/fragments/isfahan-4-iran-2016.md";
import * as Amsterdam2Nederland2017 from "../pages/fragments/amsterdam-2-nederland-2017.md";
import * as Lissabon2Portugal2023 from "../pages/fragments/lissabon-2-portugal-2023.md";
import * as EnnaItalie2022 from "../pages/fragments/enna-italie-2022.md";
import * as PortoPortugal2015 from "../pages/fragments/porto-portugal-2015.md";
import * as AmsterdamNederland2017 from "../pages/fragments/amsterdam-nederland-2017.md";
import * as AarhusDenemarken2023 from "../pages/fragments/aarhus-denemarken-2023.md";
import * as NoordpolderzijlNederland2017 from "../pages/fragments/noordpolderzijl-nederland-2017.md";
import * as GeirangerNoorwegen2022 from "../pages/fragments/geiranger-noorwegen-2022.md";
import * as QazvinIran2016 from "../pages/fragments/qazvin-iran-2016.md";
import * as IsfahanIran2016 from "../pages/fragments/isfahan-iran-2016.md";
import * as MadridSpanje2013 from "../pages/fragments/madrid-spanje-2013.md";
import * as Tokyo2Japan2017 from "../pages/fragments/tokyo-2-japan-2017.md";

console.log(BerlijnDuitsland2022);
export interface PhotoLayout {
  title: string;
  sizes: string;
  loading?: "eager" | "lazy";
  media?: string;
}

export interface TextLayout {
  text: string;
}

export const items: (PhotoLayout | TextLayout)[] = [
  {
    sizes: "66vw",
    title: BerlijnDuitsland2022.frontmatter.title,
    loading: "eager",
  },
  {
    sizes: "33vw",
    title: FunatsuJapan2017.frontmatter.title,
    loading: "eager",
  },
  {
    sizes: "33vw",
    title: FransumNederland2017.frontmatter.title,
    loading: "eager",
  },
  {
    sizes: "66vw",
    title: Tanabe2Japan2017.frontmatter.title,
    loading: "eager",
  },
  {
    text: "tom van der bijll (1993), wonend in amsterdam",
  },
  {
    sizes: "50vw",
    title: DarelkebdaniMarokko2015.frontmatter.title,
    loading: "eager",
  },
  {
    sizes: "50vw",
    title: JeruzalemIsrael2014.frontmatter.title,
    loading: "eager",
  },
  {
    sizes: "100vw",
    title: AmsterdamNederland2022.frontmatter.title,
    loading: "eager",
  },
  {
    sizes: "100vw",
    title: ArdabilIran2016.frontmatter.title,
    loading: "eager",
  },
  {
    text: "opgeleid als cultureel antropoloog en socioloog",
  },
  {
    sizes: "50vw",
    title: Isfahan3Iran2016.frontmatter.title,
  },
  {
    sizes: "50vw",
    title: FujikawaguchikoJapan2017.frontmatter.title,
  },
  {
    sizes: "101vw",
    title: LissabonPortugal2023.frontmatter.title,
  },
  {
    sizes: "66vw",
    title: LissabonPortugal2015.frontmatter.title,
  },
  {
    sizes: "33vw",
    title: TanabeJapan2017.frontmatter.title,
  },
  {
    sizes: "33vw",
    title: Geiranger2Noorwegen2022.frontmatter.title,
  },
  {
    sizes: "100vw",
    title: Isfahan2Iran2016.frontmatter.title,
  },
  {
    text: "fotografeert vanaf zijn vijftiende, toen nog met een geleende camera",
  },
  {
    sizes: "75vw",
    title: TokyoJapan2017.frontmatter.title,
  },
  {
    sizes: "66vw",
    title: SeoulKorea2019.frontmatter.title,
  },
  {
    sizes: "33vw",
    title: Isfahan4Iran2016.frontmatter.title,
  },
  {
    sizes: "100vw",
    title: Amsterdam2Nederland2017.frontmatter.title,
  },
  {
    sizes: "100vw",
    title: Lissabon2Portugal2023.frontmatter.title,
  },
  {
    text: "richt zich met name op straatfotografie, zowel analoog als digitaal",
  },
  {
    sizes: "66vw",
    title: EnnaItalie2022.frontmatter.title,
  },
  {
    sizes: "33vw",
    title: PortoPortugal2015.frontmatter.title,
  },
  {
    sizes: "75vw",
    title: AmsterdamNederland2017.frontmatter.title,
  },
  {
    sizes: "33vw",
    title: AarhusDenemarken2023.frontmatter.title,
  },
  {
    sizes: "33vw",
    title: NoordpolderzijlNederland2017.frontmatter.title,
  },
  {
    sizes: "66vw",
    title: GeirangerNoorwegen2022.frontmatter.title,
  },
  {
    sizes: "100vw",
    title: QazvinIran2016.frontmatter.title,
  },
  {
    text: 'voor informatie en fotoprints: <a href="mailto:info@tomvanderbijll.com">info@tomvanderbijll.com</a>',
  },
  {
    sizes: "100vw",
    title: IsfahanIran2016.frontmatter.title,
  },
  {
    sizes: "100vw",
    title: MadridSpanje2013.frontmatter.title,
  },
  {
    sizes: "100vw",
    title: Tokyo2Japan2017.frontmatter.title,
  },
];
