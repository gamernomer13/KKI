SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 203 (class 1259 OID 29540)
-- Name: kkidistricts; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkidistricts (
    "Id" integer NOT NULL,
    "Identifier" bigint NOT NULL,
    "InArchive" boolean NOT NULL,
    "TypeName" text
);


ALTER TABLE public.kkidistricts OWNER TO kki;

--
-- TOC entry 202 (class 1259 OID 29538)
-- Name: kkidistricts_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkidistricts_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkidistricts_Id_seq" OWNER TO kki;

--
-- TOC entry 3751 (class 0 OID 0)
-- Dependencies: 202
-- Name: kkidistricts_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkidistricts_Id_seq" OWNED BY public.kkidistricts."Id";


--
-- TOC entry 215 (class 1259 OID 29606)
-- Name: kkiexternaldistricts; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkiexternaldistricts (
    "Id" bigint NOT NULL,
    "DistrictId" integer NOT NULL,
    "InArchive" boolean NOT NULL,
    "Name" text,
    "Source" text,
    "SourceUID" bigint NOT NULL
);


ALTER TABLE public.kkiexternaldistricts OWNER TO kki;

--
-- TOC entry 214 (class 1259 OID 29604)
-- Name: kkiexternaldistricts_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkiexternaldistricts_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkiexternaldistricts_Id_seq" OWNER TO kki;

--
-- TOC entry 3752 (class 0 OID 0)
-- Dependencies: 214
-- Name: kkiexternaldistricts_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkiexternaldistricts_Id_seq" OWNED BY public.kkiexternaldistricts."Id";


--
-- TOC entry 217 (class 1259 OID 29622)
-- Name: kkiexternalgeometrytypes; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkiexternalgeometrytypes (
    "Id" bigint NOT NULL,
    "GeometryTypeId" integer NOT NULL,
    "InArchive" boolean NOT NULL,
    "Name" text,
    "Source" text,
    "SourceUID" bigint NOT NULL
);


ALTER TABLE public.kkiexternalgeometrytypes OWNER TO kki;

--
-- TOC entry 216 (class 1259 OID 29620)
-- Name: kkiexternalgeometrytypes_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkiexternalgeometrytypes_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkiexternalgeometrytypes_Id_seq" OWNER TO kki;

--
-- TOC entry 3753 (class 0 OID 0)
-- Dependencies: 216
-- Name: kkiexternalgeometrytypes_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkiexternalgeometrytypes_Id_seq" OWNED BY public.kkiexternalgeometrytypes."Id";


--
-- TOC entry 219 (class 1259 OID 29638)
-- Name: kkiexternalmunicipaldistricts; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkiexternalmunicipaldistricts (
    "Id" bigint NOT NULL,
    "InArchive" boolean NOT NULL,
    "MunicipalDistrictId" integer NOT NULL,
    "Name" text,
    "Source" text,
    "SourceUID" bigint NOT NULL
);


ALTER TABLE public.kkiexternalmunicipaldistricts OWNER TO kki;

--
-- TOC entry 218 (class 1259 OID 29636)
-- Name: kkiexternalmunicipaldistricts_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkiexternalmunicipaldistricts_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkiexternalmunicipaldistricts_Id_seq" OWNER TO kki;

--
-- TOC entry 3754 (class 0 OID 0)
-- Dependencies: 218
-- Name: kkiexternalmunicipaldistricts_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkiexternalmunicipaldistricts_Id_seq" OWNED BY public.kkiexternalmunicipaldistricts."Id";


--
-- TOC entry 237 (class 1259 OID 29802)
-- Name: kkiexternalrequestevents; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkiexternalrequestevents (
    "Id" bigint NOT NULL,
    "InArchive" boolean NOT NULL,
    "KKIRequestEventId" bigint NOT NULL,
    "Name" text,
    "Source" text,
    "SourceUID" bigint NOT NULL
);


ALTER TABLE public.kkiexternalrequestevents OWNER TO kki;

--
-- TOC entry 236 (class 1259 OID 29800)
-- Name: kkiexternalrequestevents_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkiexternalrequestevents_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkiexternalrequestevents_Id_seq" OWNER TO kki;

--
-- TOC entry 3755 (class 0 OID 0)
-- Dependencies: 236
-- Name: kkiexternalrequestevents_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkiexternalrequestevents_Id_seq" OWNED BY public.kkiexternalrequestevents."Id";


--
-- TOC entry 221 (class 1259 OID 29654)
-- Name: kkiexternalrequeststates; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkiexternalrequeststates (
    "Id" bigint NOT NULL,
    "InArchive" boolean NOT NULL,
    "KKIRequestStateId" integer NOT NULL,
    "Name" text,
    "Source" text,
    "SourceUID" bigint NOT NULL
);


ALTER TABLE public.kkiexternalrequeststates OWNER TO kki;

--
-- TOC entry 220 (class 1259 OID 29652)
-- Name: kkiexternalrequeststates_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkiexternalrequeststates_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkiexternalrequeststates_Id_seq" OWNER TO kki;

--
-- TOC entry 3756 (class 0 OID 0)
-- Dependencies: 220
-- Name: kkiexternalrequeststates_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkiexternalrequeststates_Id_seq" OWNED BY public.kkiexternalrequeststates."Id";


--
-- TOC entry 227 (class 1259 OID 29717)
-- Name: kkiexternalznoprequests; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkiexternalznoprequests (
    "Id" bigint NOT NULL,
    "GeometryId" bigint,
    "InArchive" boolean NOT NULL,
    "KKIZnopRequestId" bigint NOT NULL,
    "Name" text,
    "RequestId" bigint,
    "Source" text,
    "SourceUID" bigint NOT NULL
);


ALTER TABLE public.kkiexternalznoprequests OWNER TO kki;

--
-- TOC entry 226 (class 1259 OID 29715)
-- Name: kkiexternalznoprequests_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkiexternalznoprequests_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkiexternalznoprequests_Id_seq" OWNER TO kki;

--
-- TOC entry 3757 (class 0 OID 0)
-- Dependencies: 226
-- Name: kkiexternalznoprequests_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkiexternalznoprequests_Id_seq" OWNED BY public.kkiexternalznoprequests."Id";


--
-- TOC entry 223 (class 1259 OID 29670)
-- Name: kkiexternalznopstatuses; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkiexternalznopstatuses (
    "Id" bigint NOT NULL,
    "InArchive" boolean NOT NULL,
    "KKIZnopStatusId" integer NOT NULL,
    "Name" text,
    "Source" text,
    "SourceUID" bigint NOT NULL
);


ALTER TABLE public.kkiexternalznopstatuses OWNER TO kki;

--
-- TOC entry 222 (class 1259 OID 29668)
-- Name: kkiexternalznopstatuses_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkiexternalznopstatuses_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkiexternalznopstatuses_Id_seq" OWNER TO kki;

--
-- TOC entry 3758 (class 0 OID 0)
-- Dependencies: 222
-- Name: kkiexternalznopstatuses_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkiexternalznopstatuses_Id_seq" OWNED BY public.kkiexternalznopstatuses."Id";


--
-- TOC entry 229 (class 1259 OID 29733)
-- Name: kkifiles; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkifiles (
    "Id" bigint NOT NULL,
    "FileName" text,
    "FileSize" integer NOT NULL,
    "FileType" text,
    "KKIZnopRequestId" bigint NOT NULL,
    "ServerFileName" text
);


ALTER TABLE public.kkifiles OWNER TO kki;

--
-- TOC entry 228 (class 1259 OID 29731)
-- Name: kkifiles_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkifiles_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkifiles_Id_seq" OWNER TO kki;

--
-- TOC entry 3759 (class 0 OID 0)
-- Dependencies: 228
-- Name: kkifiles_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkifiles_Id_seq" OWNED BY public.kkifiles."Id";


--
-- TOC entry 231 (class 1259 OID 29749)
-- Name: kkigeometrys; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkigeometrys (
    "Id" bigint NOT NULL,
    "Coordinates" public.geometry,
    "KKIZnopRequestId" bigint,
    "Type" text,
    kkistatus_id integer NOT NULL
);


ALTER TABLE public.kkigeometrys OWNER TO kki;

--
-- TOC entry 230 (class 1259 OID 29747)
-- Name: kkigeometrys_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkigeometrys_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkigeometrys_Id_seq" OWNER TO kki;

--
-- TOC entry 3760 (class 0 OID 0)
-- Dependencies: 230
-- Name: kkigeometrys_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkigeometrys_Id_seq" OWNED BY public.kkigeometrys."Id";


--
-- TOC entry 205 (class 1259 OID 29551)
-- Name: kkigeometrytypes; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkigeometrytypes (
    "Id" integer NOT NULL,
    "Identifier" bigint NOT NULL,
    "InArchive" boolean NOT NULL,
    "TypeName" text
);


ALTER TABLE public.kkigeometrytypes OWNER TO kki;

--
-- TOC entry 204 (class 1259 OID 29549)
-- Name: kkigeometrytypes_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkigeometrytypes_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkigeometrytypes_Id_seq" OWNER TO kki;

--
-- TOC entry 3761 (class 0 OID 0)
-- Dependencies: 204
-- Name: kkigeometrytypes_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkigeometrytypes_Id_seq" OWNED BY public.kkigeometrytypes."Id";


--
-- TOC entry 233 (class 1259 OID 29765)
-- Name: kkimails; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkimails (
    "Id" bigint NOT NULL,
    "Error" text,
    "From" text,
    "IsSended" boolean NOT NULL,
    "KKIZnopRequestId" bigint,
    "SendTime" timestamp without time zone NOT NULL,
    "To" text
);


ALTER TABLE public.kkimails OWNER TO kki;

--
-- TOC entry 232 (class 1259 OID 29763)
-- Name: kkimails_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkimails_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkimails_Id_seq" OWNER TO kki;

--
-- TOC entry 3762 (class 0 OID 0)
-- Dependencies: 232
-- Name: kkimails_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkimails_Id_seq" OWNED BY public.kkimails."Id";


--
-- TOC entry 207 (class 1259 OID 29562)
-- Name: kkimunicipaldistricts; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkimunicipaldistricts (
    "Id" integer NOT NULL,
    "Identifier" bigint NOT NULL,
    "InArchive" boolean NOT NULL,
    "TypeName" text
);


ALTER TABLE public.kkimunicipaldistricts OWNER TO kki;

--
-- TOC entry 206 (class 1259 OID 29560)
-- Name: kkimunicipaldistricts_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkimunicipaldistricts_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkimunicipaldistricts_Id_seq" OWNER TO kki;

--
-- TOC entry 3763 (class 0 OID 0)
-- Dependencies: 206
-- Name: kkimunicipaldistricts_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkimunicipaldistricts_Id_seq" OWNED BY public.kkimunicipaldistricts."Id";


--
-- TOC entry 235 (class 1259 OID 29781)
-- Name: kkirequestevents; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkirequestevents (
    "Id" bigint NOT NULL,
    "CSTime" timestamp without time zone NOT NULL,
    "InArchive" boolean NOT NULL,
    "KKIRequestStateId" integer NOT NULL,
    "KKIZnopRequestId" bigint NOT NULL,
    ip_address text
);


ALTER TABLE public.kkirequestevents OWNER TO kki;

--
-- TOC entry 234 (class 1259 OID 29779)
-- Name: kkirequestevents_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkirequestevents_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkirequestevents_Id_seq" OWNER TO kki;

--
-- TOC entry 3764 (class 0 OID 0)
-- Dependencies: 234
-- Name: kkirequestevents_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkirequestevents_Id_seq" OWNED BY public.kkirequestevents."Id";


--
-- TOC entry 209 (class 1259 OID 29573)
-- Name: kkirequeststates; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkirequeststates (
    "Id" integer NOT NULL,
    "Identifier" bigint NOT NULL,
    "InArchive" boolean NOT NULL,
    "TypeName" text
);


ALTER TABLE public.kkirequeststates OWNER TO kki;

--
-- TOC entry 208 (class 1259 OID 29571)
-- Name: kkirequeststates_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkirequeststates_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkirequeststates_Id_seq" OWNER TO kki;

--
-- TOC entry 3765 (class 0 OID 0)
-- Dependencies: 208
-- Name: kkirequeststates_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkirequeststates_Id_seq" OWNED BY public.kkirequeststates."Id";


--
-- TOC entry 211 (class 1259 OID 29584)
-- Name: kkirequesttypes; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkirequesttypes (
    "Id" integer NOT NULL,
    "InArchive" boolean NOT NULL,
    "TypeName" text
);


ALTER TABLE public.kkirequesttypes OWNER TO kki;

--
-- TOC entry 210 (class 1259 OID 29582)
-- Name: kkirequesttypes_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkirequesttypes_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkirequesttypes_Id_seq" OWNER TO kki;

--
-- TOC entry 3766 (class 0 OID 0)
-- Dependencies: 210
-- Name: kkirequesttypes_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkirequesttypes_Id_seq" OWNED BY public.kkirequesttypes."Id";


--
-- TOC entry 225 (class 1259 OID 29686)
-- Name: kkiznoprequests; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkiznoprequests (
    "Id" bigint NOT NULL,
    "Address" text,
    "Area" double precision,
    "Comment" text,
    "CorpName" text,
    "DateOfCreation" timestamp without time zone NOT NULL,
    "DistrictId" integer NOT NULL,
    "FullName" text,
    "InArchive" boolean NOT NULL,
    lat double precision,
    lng double precision,
    "MailAddres" text,
    "MailConfirmed" boolean NOT NULL,
    "MunicipalDistrictId" integer NOT NULL,
    "OIDSvyaz" bigint,
    "ObjectName" text,
    "OBJECTID" bigint,
    "ObtypeUID" text,
    "OID_" bigint,
    "Perimetr" double precision,
    "Position" text,
    "RequestKey" uuid NOT NULL,
    "SelectedStatusId" integer NOT NULL,
    "Thelephone" text,
    "TypeId" integer NOT NULL
);


ALTER TABLE public.kkiznoprequests OWNER TO kki;

--
-- TOC entry 224 (class 1259 OID 29684)
-- Name: kkiznoprequests_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkiznoprequests_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkiznoprequests_Id_seq" OWNER TO kki;

--
-- TOC entry 3767 (class 0 OID 0)
-- Dependencies: 224
-- Name: kkiznoprequests_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkiznoprequests_Id_seq" OWNED BY public.kkiznoprequests."Id";


--
-- TOC entry 213 (class 1259 OID 29595)
-- Name: kkiznopstatuses; Type: TABLE; Schema: public; Owner: kki
--

CREATE TABLE public.kkiznopstatuses (
    "Id" integer NOT NULL,
    "Identifier" bigint NOT NULL,
    "InArchive" boolean NOT NULL,
    "TypeName" text
);


ALTER TABLE public.kkiznopstatuses OWNER TO kki;

--
-- TOC entry 212 (class 1259 OID 29593)
-- Name: kkiznopstatuses_Id_seq; Type: SEQUENCE; Schema: public; Owner: kki
--

CREATE SEQUENCE public."kkiznopstatuses_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."kkiznopstatuses_Id_seq" OWNER TO kki;

--
-- TOC entry 3768 (class 0 OID 0)
-- Dependencies: 212
-- Name: kkiznopstatuses_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kki
--

ALTER SEQUENCE public."kkiznopstatuses_Id_seq" OWNED BY public.kkiznopstatuses."Id";


--
-- TOC entry 3500 (class 2604 OID 29543)
-- Name: kkidistricts Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkidistricts ALTER COLUMN "Id" SET DEFAULT nextval('public."kkidistricts_Id_seq"'::regclass);


--
-- TOC entry 3506 (class 2604 OID 29609)
-- Name: kkiexternaldistricts Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternaldistricts ALTER COLUMN "Id" SET DEFAULT nextval('public."kkiexternaldistricts_Id_seq"'::regclass);


--
-- TOC entry 3507 (class 2604 OID 29625)
-- Name: kkiexternalgeometrytypes Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalgeometrytypes ALTER COLUMN "Id" SET DEFAULT nextval('public."kkiexternalgeometrytypes_Id_seq"'::regclass);


--
-- TOC entry 3508 (class 2604 OID 29641)
-- Name: kkiexternalmunicipaldistricts Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalmunicipaldistricts ALTER COLUMN "Id" SET DEFAULT nextval('public."kkiexternalmunicipaldistricts_Id_seq"'::regclass);


--
-- TOC entry 3517 (class 2604 OID 29805)
-- Name: kkiexternalrequestevents Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalrequestevents ALTER COLUMN "Id" SET DEFAULT nextval('public."kkiexternalrequestevents_Id_seq"'::regclass);


--
-- TOC entry 3509 (class 2604 OID 29657)
-- Name: kkiexternalrequeststates Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalrequeststates ALTER COLUMN "Id" SET DEFAULT nextval('public."kkiexternalrequeststates_Id_seq"'::regclass);


--
-- TOC entry 3512 (class 2604 OID 29720)
-- Name: kkiexternalznoprequests Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalznoprequests ALTER COLUMN "Id" SET DEFAULT nextval('public."kkiexternalznoprequests_Id_seq"'::regclass);


--
-- TOC entry 3510 (class 2604 OID 29673)
-- Name: kkiexternalznopstatuses Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalznopstatuses ALTER COLUMN "Id" SET DEFAULT nextval('public."kkiexternalznopstatuses_Id_seq"'::regclass);


--
-- TOC entry 3513 (class 2604 OID 29736)
-- Name: kkifiles Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkifiles ALTER COLUMN "Id" SET DEFAULT nextval('public."kkifiles_Id_seq"'::regclass);


--
-- TOC entry 3514 (class 2604 OID 29752)
-- Name: kkigeometrys Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkigeometrys ALTER COLUMN "Id" SET DEFAULT nextval('public."kkigeometrys_Id_seq"'::regclass);


--
-- TOC entry 3501 (class 2604 OID 29554)
-- Name: kkigeometrytypes Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkigeometrytypes ALTER COLUMN "Id" SET DEFAULT nextval('public."kkigeometrytypes_Id_seq"'::regclass);


--
-- TOC entry 3515 (class 2604 OID 29768)
-- Name: kkimails Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkimails ALTER COLUMN "Id" SET DEFAULT nextval('public."kkimails_Id_seq"'::regclass);


--
-- TOC entry 3502 (class 2604 OID 29565)
-- Name: kkimunicipaldistricts Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkimunicipaldistricts ALTER COLUMN "Id" SET DEFAULT nextval('public."kkimunicipaldistricts_Id_seq"'::regclass);


--
-- TOC entry 3516 (class 2604 OID 29784)
-- Name: kkirequestevents Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkirequestevents ALTER COLUMN "Id" SET DEFAULT nextval('public."kkirequestevents_Id_seq"'::regclass);


--
-- TOC entry 3503 (class 2604 OID 29576)
-- Name: kkirequeststates Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkirequeststates ALTER COLUMN "Id" SET DEFAULT nextval('public."kkirequeststates_Id_seq"'::regclass);


--
-- TOC entry 3504 (class 2604 OID 29587)
-- Name: kkirequesttypes Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkirequesttypes ALTER COLUMN "Id" SET DEFAULT nextval('public."kkirequesttypes_Id_seq"'::regclass);


--
-- TOC entry 3511 (class 2604 OID 29689)
-- Name: kkiznoprequests Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiznoprequests ALTER COLUMN "Id" SET DEFAULT nextval('public."kkiznoprequests_Id_seq"'::regclass);


--
-- TOC entry 3505 (class 2604 OID 29598)
-- Name: kkiznopstatuses Id; Type: DEFAULT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiznopstatuses ALTER COLUMN "Id" SET DEFAULT nextval('public."kkiznopstatuses_Id_seq"'::regclass);


--
-- TOC entry 3711 (class 0 OID 29540)
-- Dependencies: 203
-- Data for Name: kkidistricts; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkidistricts ("Id", "Identifier", "InArchive", "TypeName") FROM stdin;
1	7	f	Петроградский
2	12	f	Невский
3	37	f	Колпинский
4	11	f	Красногвардейский
5	38	f	Курортный
6	15	f	Кировский
7	35	f	Пушкинский
8	10	f	Калининский
9	21	f	Петродворцовый
10	14	f	Московский
11	13	f	Фрунзенский
12	6	f	Василеостровский
13	16	f	Красносельский
14	36	f	Выборгский
15	32	f	Адмиралтейский
16	31	f	Центральный
17	50	f	Кронштадтский
18	34	f	Приморский
\.


--
-- TOC entry 3769 (class 0 OID 0)
-- Dependencies: 202
-- Name: kkidistricts_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkidistricts_Id_seq"', 18, true);


--
-- TOC entry 3723 (class 0 OID 29606)
-- Dependencies: 215
-- Data for Name: kkiexternaldistricts; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkiexternaldistricts ("Id", "DistrictId", "InArchive", "Name", "Source", "SourceUID") FROM stdin;
1	15	f	Адмиралтейский	Portal	2
2	18	f	Приозерский ЛО	Portal	34
3	15	f	Павловский	Portal	32
5	16	f	Центральный	Portal	19
6	11	f	Фрунзенский	Portal	18
7	7	f	Пушкинский	Portal	17
8	18	f	Приморский	Portal	16
9	9	f	Петродворцовый	Portal	15
10	1	f	Петроградский	Portal	14
11	7	f	Сосновоборский ЛО	Portal	35
12	2	f	Невский	Portal	13
13	5	f	Курортный	Portal	11
14	17	f	Кронштадтский	Portal	10
15	4	f	Красногвардейский	Portal	9
16	3	f	Колпинский	Portal	8
17	6	f	Кировский	Portal	7
18	8	f	Калининский	Portal	6
19	14	f	Выборгский	Portal	5
20	12	f	Василеостровский	Portal	4
21	13	f	Красносельский	Portal	3
22	10	f	Московский	Portal	12
23	14	f	Тосненский ЛО	Portal	36
4	16	t	Неизвестно	Portal	31
\.


--
-- TOC entry 3770 (class 0 OID 0)
-- Dependencies: 214
-- Name: kkiexternaldistricts_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkiexternaldistricts_Id_seq"', 23, true);


--
-- TOC entry 3725 (class 0 OID 29622)
-- Dependencies: 217
-- Data for Name: kkiexternalgeometrytypes; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkiexternalgeometrytypes ("Id", "GeometryTypeId", "InArchive", "Name", "Source", "SourceUID") FROM stdin;
\.


--
-- TOC entry 3771 (class 0 OID 0)
-- Dependencies: 216
-- Name: kkiexternalgeometrytypes_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkiexternalgeometrytypes_Id_seq"', 1, false);


--
-- TOC entry 3727 (class 0 OID 29638)
-- Dependencies: 219
-- Data for Name: kkiexternalmunicipaldistricts; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkiexternalmunicipaldistricts ("Id", "InArchive", "MunicipalDistrictId", "Name", "Source", "SourceUID") FROM stdin;
1	f	92	Муниципальное образование Коломна	Portal	1
2	f	81	Муниципальное образование Аптекарский остров	Portal	81
3	f	83	Муниципальное образование Посадский	Portal	80
4	f	80	Муниципальное образование Кронверкское	Portal	79
5	f	57	Муниципальное образование Введенский	Portal	78
6	f	52	Муниципальное образование Правобережный	Portal	77
7	f	48	Муниципальное образование Оккервиль	Portal	76
8	f	47	Муниципальное образование Невский округ	Portal	75
9	f	79	Муниципальное образование № 54	Portal	74
10	f	37	Муниципальное образование Народный	Portal	73
11	f	31	Муниципальное образование Рыбацкое	Portal	72
12	f	43	Муниципальное образование Обуховский	Portal	71
13	f	1	Муниципальное образование Округ Петровский	Portal	82
14	f	23	Муниципальное образование Ивановский	Portal	70
15	f	76	Муниципальное образование Звездное	Portal	68
16	f	50	Муниципальное образование Пулковский меридиан	Portal	67
17	f	29	Муниципальное образование Новоизмайловское	Portal	66
18	f	75	Муниципальное образование Гагаринское	Portal	65
19	f	11	Муниципальное образование Московская застава	Portal	64
20	f	74	Муниципальное образование поселок Ушково	Portal	63
21	f	73	Муниципальное образование поселок Солнечное	Portal	62
22	f	72	Муниципальное образование поселок Смолячково	Portal	61
23	f	70	Муниципальное образование поселок Серово	Portal	60
24	f	38	Муниципальное образование поселок Репино	Portal	59
25	f	39	Муниципальное образование поселок Песочный	Portal	58
26	f	78	Муниципальное образование Невская застава	Portal	69
27	f	67	Муниципальное образование поселок Молодежное	Portal	57
28	f	55	Муниципальное образование Чкаловское	Portal	83
29	f	5	Муниципальное образование город Петергоф	Portal	85
30	f	63	Муниципальное образование Смольнинское	Portal	109
31	f	62	Муниципальное образование Литейный округ	Portal	108
32	f	61	Муниципальное образование №78	Portal	107
33	f	60	Муниципальное образование Дворцовый округ	Portal	106
34	f	22	Муниципальное образование Балканский	Portal	105
35	f	59	Муниципальное образование №75	Portal	104
36	f	27	Муниципальное образование Георгиевский	Portal	103
37	f	58	Муниципальное образование Купчино	Portal	102
38	f	69	Муниципальное образование №72	Portal	101
39	f	10	Муниципальное образование Волковское	Portal	100
40	f	71	Муниципальное образование поселок Тярлево	Portal	99
41	f	4	Муниципальное образование поселок Стрельна	Portal	84
42	f	64	Муниципальное образование город Павловск	Portal	98
43	f	84	Муниципальное образование поселок Шушары	Portal	96
44	f	51	Муниципальное образование город Пушкин	Portal	95
45	f	86	Муниципальное образование поселок Лисий Нос	Portal	94
46	f	26	Муниципальное образование Коломяги	Portal	93
47	f	97	Муниципальное образование Юнтолово	Portal	92
48	f	85	Муниципальное образование Озеро Долгое	Portal	91
49	f	87	Муниципальное образование Комендантский аэродром	Portal	90
50	f	109	Муниципальное образование Черная речка	Portal	89
51	f	46	Муниципальное образование №65	Portal	88
52	f	30	Муниципальное образование Лахта-Ольгино	Portal	87
53	f	13	Муниципальное образование город Ломоносов	Portal	86
54	f	12	Муниципальное образование поселок Александровская	Portal	97
55	f	68	Муниципальное образование Лиговка-Ямская	Portal	110
56	f	18	Муниципальное образование поселок Комарово	Portal	56
57	f	49	Муниципальное образование город Сестрорецк	Portal	54
58	f	8	Муниципальное образование Северный	Portal	25
59	f	42	Муниципальное образование Пискаревка	Portal	24
60	f	96	Муниципальное образование №21	Portal	23
61	f	95	Муниципальное образование Финляндский округ	Portal	22
62	f	94	Муниципальное образование Академическое	Portal	21
63	f	40	Муниципальное образование Гражданка	Portal	20
64	f	21	Муниципальное образование поселок Левашово	Portal	19
65	f	16	Муниципальное образование поселок Парголово	Portal	18
66	f	93	Муниципальное образование Шувалово-Озерки	Portal	17
67	f	111	Муниципальное образование Сергиевское	Portal	16
68	f	3	Муниципальное образование №15	Portal	15
69	f	98	Муниципальное образование Прометей	Portal	26
70	f	20	Муниципальное образование Сосновское	Portal	14
71	f	91	Муниципальное образование Сампсониевское	Portal	12
72	f	6	Муниципальное образование Остров Декабристов	Portal	11
73	f	33	Муниципальное образование Морской	Portal	10
74	f	7	Муниципальное образование Гавань	Portal	9
75	f	25	Муниципальное образование Васильевский	Portal	8
76	f	90	Муниципальное образование №7	Portal	7
77	f	53	Муниципальное образование Екатерингофский	Portal	6
78	f	89	Муниципальное образование Измайловское	Portal	5
79	f	104	Муниципальное образование Семеновский	Portal	4
80	f	88	Муниципальное образование Адмиралтейский округ	Portal	3
81	f	106	Муниципальное образование Сенной округ	Portal	2
82	f	17	Муниципальное образование Светлановское	Portal	13
83	f	77	Муниципальное образование поселок Белоостров	Portal	55
84	f	54	Муниципальное образование Княжево	Portal	27
85	f	99	Муниципальное образование Дачное	Portal	29
86	f	44	Муниципальное образование город Зеленогорск	Portal	53
87	f	34	Муниципальное образование город Кронштадт	Portal	52
88	f	66	Муниципальное образование город Красное Село	Portal	51
89	f	19	Муниципальное образование Горелово	Portal	50
90	f	35	Муниципальное образование Константиновское	Portal	49
91	f	65	Муниципальное образование Урицк	Portal	48
92	f	36	Муниципальное образование Сосновая Поляна	Portal	47
93	f	24	Муниципальное образование Южно-Приморский	Portal	46
94	f	14	Муниципальное образование Юго-Запад	Portal	45
95	f	45	Муниципальное образование Ржевка	Portal	44
96	f	108	Муниципальное образование Пороховые	Portal	43
97	f	110	Муниципальное образование Ульянка	Portal	28
98	f	107	Муниципальное образование Малая Охта	Portal	42
99	f	105	Муниципальное образование Полюстрово	Portal	40
100	f	2	Муниципальное образование поселок Металлострой	Portal	39
101	f	41	Муниципальное образование поселок Саперный	Portal	38
102	f	32	Муниципальное образование поселок Петро-Славянка	Portal	37
103	f	103	Муниципальное образование поселок Усть-Ижора	Portal	36
104	f	15	Муниципальное образование поселок Понтонный	Portal	35
105	f	28	Муниципальное образование город Колпино	Portal	34
106	f	102	Муниципальное образование Морские ворота	Portal	33
107	f	101	Муниципальное образование Красненькая речка	Portal	32
108	f	100	Муниципальное образование Нарвский округ	Portal	31
109	f	9	Муниципальное образование Автово	Portal	30
110	f	56	Муниципальное образование Большая Охта	Portal	41
111	f	82	Муниципальное образование Владимирский округ	Portal	111
\.


--
-- TOC entry 3772 (class 0 OID 0)
-- Dependencies: 218
-- Name: kkiexternalmunicipaldistricts_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkiexternalmunicipaldistricts_Id_seq"', 111, true);


--
-- TOC entry 3745 (class 0 OID 29802)
-- Dependencies: 237
-- Data for Name: kkiexternalrequestevents; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkiexternalrequestevents ("Id", "InArchive", "KKIRequestEventId", "Name", "Source", "SourceUID") FROM stdin;
\.


--
-- TOC entry 3773 (class 0 OID 0)
-- Dependencies: 236
-- Name: kkiexternalrequestevents_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkiexternalrequestevents_Id_seq"', 1, false);


--
-- TOC entry 3729 (class 0 OID 29654)
-- Dependencies: 221
-- Data for Name: kkiexternalrequeststates; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkiexternalrequeststates ("Id", "InArchive", "KKIRequestStateId", "Name", "Source", "SourceUID") FROM stdin;
1	f	3	Новая	Portal	1
\.


--
-- TOC entry 3774 (class 0 OID 0)
-- Dependencies: 220
-- Name: kkiexternalrequeststates_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkiexternalrequeststates_Id_seq"', 1, true);


--
-- TOC entry 3735 (class 0 OID 29717)
-- Dependencies: 227
-- Data for Name: kkiexternalznoprequests; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkiexternalznoprequests ("Id", "GeometryId", "InArchive", "KKIZnopRequestId", "Name", "RequestId", "Source", "SourceUID") FROM stdin;
\.


--
-- TOC entry 3775 (class 0 OID 0)
-- Dependencies: 226
-- Name: kkiexternalznoprequests_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkiexternalznoprequests_Id_seq"', 1, false);


--
-- TOC entry 3731 (class 0 OID 29670)
-- Dependencies: 223
-- Data for Name: kkiexternalznopstatuses; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkiexternalznopstatuses ("Id", "InArchive", "KKIZnopStatusId", "Name", "Source", "SourceUID") FROM stdin;
1	f	1	ЗНОП городского значения	Portal	22
2	f	0	ЗНОП местного значения	Portal	33
3	f	2	ЗНОП резерва озеленения	Portal	1069
\.


--
-- TOC entry 3776 (class 0 OID 0)
-- Dependencies: 222
-- Name: kkiexternalznopstatuses_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkiexternalznopstatuses_Id_seq"', 3, true);


--
-- TOC entry 3737 (class 0 OID 29733)
-- Dependencies: 229
-- Data for Name: kkifiles; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkifiles ("Id", "FileName", "FileSize", "FileType", "KKIZnopRequestId", "ServerFileName") FROM stdin;
\.


--
-- TOC entry 3777 (class 0 OID 0)
-- Dependencies: 228
-- Name: kkifiles_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkifiles_Id_seq"', 1, false);


--
-- TOC entry 3739 (class 0 OID 29749)
-- Dependencies: 231
-- Data for Name: kkigeometrys; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkigeometrys ("Id", "Coordinates", "KKIZnopRequestId", "Type", kkistatus_id) FROM stdin;
\.


--
-- TOC entry 3778 (class 0 OID 0)
-- Dependencies: 230
-- Name: kkigeometrys_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkigeometrys_Id_seq"', 1, false);


--
-- TOC entry 3713 (class 0 OID 29551)
-- Dependencies: 205
-- Data for Name: kkigeometrytypes; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkigeometrytypes ("Id", "Identifier", "InArchive", "TypeName") FROM stdin;
\.


--
-- TOC entry 3779 (class 0 OID 0)
-- Dependencies: 204
-- Name: kkigeometrytypes_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkigeometrytypes_Id_seq"', 1, false);


--
-- TOC entry 3741 (class 0 OID 29765)
-- Dependencies: 233
-- Data for Name: kkimails; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkimails ("Id", "Error", "From", "IsSended", "KKIZnopRequestId", "SendTime", "To") FROM stdin;
\.


--
-- TOC entry 3780 (class 0 OID 0)
-- Dependencies: 232
-- Name: kkimails_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkimails_Id_seq"', 1, false);


--
-- TOC entry 3715 (class 0 OID 29562)
-- Dependencies: 207
-- Data for Name: kkimunicipaldistricts; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkimunicipaldistricts ("Id", "Identifier", "InArchive", "TypeName") FROM stdin;
1	62	f	муниципальный округ округ Петровский
2	114	f	поселок Металлострой
3	15	f	муниципальный округ №15
4	125	f	поселок Стрельна
5	106	f	город Петергоф
6	11	f	муниципальный округ Остров Декабристов
7	9	f	муниципальный округ Гавань
8	23	f	муниципальный округ Северный
9	28	f	муниципальный округ Автово
10	71	f	муниципальный округ Волковское
11	44	f	муниципальный округ Московская застава
12	109	f	поселок Александровская
13	104	f	город Ломоносов
14	37	f	муниципальный округ Юго-Запад
15	119	f	поселок Понтонный
16	116	f	поселок Парголово
17	13	f	муниципальный округ Светлановское
18	111	f	поселок Комарово
19	42	f	муниципальный округ Горелово
20	14	f	муниципальный округ Сосновское
21	112	f	поселок Левашово
22	76	f	муниципальный округ Балканский
23	50	f	муниципальный округ Ивановский
24	38	f	муниципальный округ Южно-Приморский
25	8	f	муниципальный округ Васильевский
26	70	f	муниципальный округ Коломяги
27	74	f	муниципальный округ Георгиевский
28	102	f	город Колпино
29	46	f	муниципальный округ Новоизмайловское
30	64	f	муниципальный округ Лахта - Ольгино
31	52	f	муниципальный округ Рыбацкое
32	117	f	поселок Петро-Славянка
33	10	f	муниципальный округ Морской
34	103	f	город Кронштадт
35	41	f	муниципальный округ Константиновское
36	39	f	муниципальный округ Сосновая поляна
37	53	f	муниципальный округ Народный
38	120	f	поселок Репино
39	118	f	поселок Песочный
40	18	f	муниципальный округ Гражданка
41	121	f	поселок Саперный
42	22	f	муниципальный округ Пискаревка
43	51	f	муниципальный округ Обуховский
44	101	f	город Зеленогорск
45	36	f	муниципальный округ Ржевка
46	65	f	муниципальный округ №65
47	55	f	муниципальный округ Невский округ
48	56	f	муниципальный округ Оккервиль
49	108	f	город Сестрорецк
50	47	f	муниципальный округ Пулковский меридиан
51	107	f	город Пушкин
52	57	f	муниципальный округ Правобережный
53	6	f	муниципальный округ Екатерингофский
54	25	f	муниципальный округ Княжево
55	63	f	муниципальный округ Чкаловское
56	33	f	муниципальный округ Большая Охта
57	58	f	муниципальный округ Введенский
58	73	f	муниципальный округ Купчино
59	75	f	муниципальный округ №75
60	77	f	муниципальный округ Дворцовый округ
61	78	f	муниципальный округ №78
62	79	f	муниципальный округ Литейный округ
63	80	f	муниципальный округ Смольнинское
64	105	f	город Павловск
65	40	f	муниципальный округ Урицк
66	43	f	город Красное Село
67	115	f	поселок Молодежное
68	81	f	муниципальный округ Лиговка - Ямская
69	72	f	муниципальный округ №72
70	122	f	поселок Серово
71	126	f	поселок Тярлево
72	123	f	поселок Смолячково
73	124	f	поселок Солнечное
74	128	f	поселок Ушково
75	45	f	муниципальный округ Гагаринское
76	48	f	муниципальный округ Звездное
77	110	f	поселок Белоостров
78	49	f	муниципальный округ Невская застава
79	54	f	муниципальный округ №54
80	59	f	муниципальный округ Кронверкское
81	61	f	муниципальный округ Аптекарский остров
82	82	f	муниципальный округ Владимирский округ
83	60	f	муниципальный округ Посадский
84	129	f	поселок Шушары
85	68	f	муниципальный округ Озеро Долгое
86	113	f	поселок Лисий Нос
87	67	f	муниципальный округ Комендантский аэродром
88	3	f	муниципальный округ Адмиралтейский округ
89	5	f	муниципальный округ  Измайловское
90	7	f	муниципальный округ №7
91	12	f	муниципальный округ Сампсониевское
92	1	f	муниципальный округ Коломна
93	17	f	муниципальный округ Шувалово-Озерки
94	19	f	муниципальный округ Академическое
95	20	f	муниципальный округ Финляндский округ
96	21	f	муниципальный округ №21
97	69	f	муниципальный округ Юнтолово
98	24	f	муниципальный округ Прометей
99	27	f	муниципальный округ Дачное
100	29	f	муниципальный округ Нарвский округ
101	30	f	муниципальный округ Красненькая речка
102	31	f	муниципальный округ Морские ворота
103	127	f	поселок Усть-Ижора
104	4	f	муниципальный округ Семеновский
105	32	f	муниципальный округ Полюстрово
106	2	f	муниципальный округ Сенной округ
107	34	f	муниципальный округ Малая Охта
108	35	f	муниципальный округ Пороховые
109	66	f	муниципальный округ Черная речка
110	26	f	муниципальный округ Ульянка
111	16	f	муниципальный округ Сергиевское
\.


--
-- TOC entry 3781 (class 0 OID 0)
-- Dependencies: 206
-- Name: kkimunicipaldistricts_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkimunicipaldistricts_Id_seq"', 111, true);


--
-- TOC entry 3743 (class 0 OID 29781)
-- Dependencies: 235
-- Data for Name: kkirequestevents; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkirequestevents ("Id", "CSTime", "InArchive", "KKIRequestStateId", "KKIZnopRequestId", ip_address) FROM stdin;
\.


--
-- TOC entry 3782 (class 0 OID 0)
-- Dependencies: 234
-- Name: kkirequestevents_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkirequestevents_Id_seq"', 1, false);


--
-- TOC entry 3717 (class 0 OID 29573)
-- Dependencies: 209
-- Data for Name: kkirequeststates; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkirequeststates ("Id", "Identifier", "InArchive", "TypeName") FROM stdin;
3	1	f	Sended
1	0	f	Registred
2	1	f	Confirmed
\.


--
-- TOC entry 3783 (class 0 OID 0)
-- Dependencies: 208
-- Name: kkirequeststates_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkirequeststates_Id_seq"', 1, false);


--
-- TOC entry 3719 (class 0 OID 29584)
-- Dependencies: 211
-- Data for Name: kkirequesttypes; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkirequesttypes ("Id", "InArchive", "TypeName") FROM stdin;
0	f	Включить в ЗНОП
1	f	Исключить из ЗНОП
2	f	Изменить статус ЗНОП
3	f	Изменить границы ЗНОП
\.


--
-- TOC entry 3784 (class 0 OID 0)
-- Dependencies: 210
-- Name: kkirequesttypes_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkirequesttypes_Id_seq"', 1, false);


--
-- TOC entry 3733 (class 0 OID 29686)
-- Dependencies: 225
-- Data for Name: kkiznoprequests; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkiznoprequests ("Id", "Address", "Area", "Comment", "CorpName", "DateOfCreation", "DistrictId", "FullName", "InArchive", lat, lng, "MailAddres", "MailConfirmed", "MunicipalDistrictId", "OIDSvyaz", "ObjectName", "OBJECTID", "ObtypeUID", "OID_", "Perimetr", "Position", "RequestKey", "SelectedStatusId", "Thelephone", "TypeId") FROM stdin;
\.


--
-- TOC entry 3785 (class 0 OID 0)
-- Dependencies: 224
-- Name: kkiznoprequests_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkiznoprequests_Id_seq"', 1, false);


--
-- TOC entry 3721 (class 0 OID 29595)
-- Dependencies: 213
-- Data for Name: kkiznopstatuses; Type: TABLE DATA; Schema: public; Owner: kki
--

COPY public.kkiznopstatuses ("Id", "Identifier", "InArchive", "TypeName") FROM stdin;
0	33	f	Местное значение
1	22	f	Городское значение
2	1069	f	Резервное озеленение
\.


--
-- TOC entry 3786 (class 0 OID 0)
-- Dependencies: 212
-- Name: kkiznopstatuses_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: kki
--

SELECT pg_catalog.setval('public."kkiznopstatuses_Id_seq"', 1, false);


--
-- TOC entry 3519 (class 2606 OID 29548)
-- Name: kkidistricts PK_kkidistricts; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkidistricts
    ADD CONSTRAINT "PK_kkidistricts" PRIMARY KEY ("Id");


--
-- TOC entry 3532 (class 2606 OID 29614)
-- Name: kkiexternaldistricts PK_kkiexternaldistricts; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternaldistricts
    ADD CONSTRAINT "PK_kkiexternaldistricts" PRIMARY KEY ("Id");


--
-- TOC entry 3535 (class 2606 OID 29630)
-- Name: kkiexternalgeometrytypes PK_kkiexternalgeometrytypes; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalgeometrytypes
    ADD CONSTRAINT "PK_kkiexternalgeometrytypes" PRIMARY KEY ("Id");


--
-- TOC entry 3538 (class 2606 OID 29646)
-- Name: kkiexternalmunicipaldistricts PK_kkiexternalmunicipaldistricts; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalmunicipaldistricts
    ADD CONSTRAINT "PK_kkiexternalmunicipaldistricts" PRIMARY KEY ("Id");


--
-- TOC entry 3569 (class 2606 OID 29810)
-- Name: kkiexternalrequestevents PK_kkiexternalrequestevents; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalrequestevents
    ADD CONSTRAINT "PK_kkiexternalrequestevents" PRIMARY KEY ("Id");


--
-- TOC entry 3541 (class 2606 OID 29662)
-- Name: kkiexternalrequeststates PK_kkiexternalrequeststates; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalrequeststates
    ADD CONSTRAINT "PK_kkiexternalrequeststates" PRIMARY KEY ("Id");


--
-- TOC entry 3553 (class 2606 OID 29725)
-- Name: kkiexternalznoprequests PK_kkiexternalznoprequests; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalznoprequests
    ADD CONSTRAINT "PK_kkiexternalznoprequests" PRIMARY KEY ("Id");


--
-- TOC entry 3544 (class 2606 OID 29678)
-- Name: kkiexternalznopstatuses PK_kkiexternalznopstatuses; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalznopstatuses
    ADD CONSTRAINT "PK_kkiexternalznopstatuses" PRIMARY KEY ("Id");


--
-- TOC entry 3556 (class 2606 OID 29741)
-- Name: kkifiles PK_kkifiles; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkifiles
    ADD CONSTRAINT "PK_kkifiles" PRIMARY KEY ("Id");


--
-- TOC entry 3559 (class 2606 OID 29757)
-- Name: kkigeometrys PK_kkigeometrys; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkigeometrys
    ADD CONSTRAINT "PK_kkigeometrys" PRIMARY KEY ("Id");


--
-- TOC entry 3521 (class 2606 OID 29559)
-- Name: kkigeometrytypes PK_kkigeometrytypes; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkigeometrytypes
    ADD CONSTRAINT "PK_kkigeometrytypes" PRIMARY KEY ("Id");


--
-- TOC entry 3562 (class 2606 OID 29773)
-- Name: kkimails PK_kkimails; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkimails
    ADD CONSTRAINT "PK_kkimails" PRIMARY KEY ("Id");


--
-- TOC entry 3523 (class 2606 OID 29570)
-- Name: kkimunicipaldistricts PK_kkimunicipaldistricts; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkimunicipaldistricts
    ADD CONSTRAINT "PK_kkimunicipaldistricts" PRIMARY KEY ("Id");


--
-- TOC entry 3566 (class 2606 OID 29789)
-- Name: kkirequestevents PK_kkirequestevents; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkirequestevents
    ADD CONSTRAINT "PK_kkirequestevents" PRIMARY KEY ("Id");


--
-- TOC entry 3525 (class 2606 OID 29581)
-- Name: kkirequeststates PK_kkirequeststates; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkirequeststates
    ADD CONSTRAINT "PK_kkirequeststates" PRIMARY KEY ("Id");


--
-- TOC entry 3527 (class 2606 OID 29592)
-- Name: kkirequesttypes PK_kkirequesttypes; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkirequesttypes
    ADD CONSTRAINT "PK_kkirequesttypes" PRIMARY KEY ("Id");


--
-- TOC entry 3550 (class 2606 OID 29694)
-- Name: kkiznoprequests PK_kkiznoprequests; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiznoprequests
    ADD CONSTRAINT "PK_kkiznoprequests" PRIMARY KEY ("Id");


--
-- TOC entry 3529 (class 2606 OID 29603)
-- Name: kkiznopstatuses PK_kkiznopstatuses; Type: CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiznopstatuses
    ADD CONSTRAINT "PK_kkiznopstatuses" PRIMARY KEY ("Id");


--
-- TOC entry 3530 (class 1259 OID 29816)
-- Name: IX_kkiexternaldistricts_DistrictId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkiexternaldistricts_DistrictId" ON public.kkiexternaldistricts USING btree ("DistrictId");


--
-- TOC entry 3533 (class 1259 OID 29817)
-- Name: IX_kkiexternalgeometrytypes_GeometryTypeId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkiexternalgeometrytypes_GeometryTypeId" ON public.kkiexternalgeometrytypes USING btree ("GeometryTypeId");


--
-- TOC entry 3536 (class 1259 OID 29818)
-- Name: IX_kkiexternalmunicipaldistricts_MunicipalDistrictId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkiexternalmunicipaldistricts_MunicipalDistrictId" ON public.kkiexternalmunicipaldistricts USING btree ("MunicipalDistrictId");


--
-- TOC entry 3567 (class 1259 OID 29819)
-- Name: IX_kkiexternalrequestevents_KKIRequestEventId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkiexternalrequestevents_KKIRequestEventId" ON public.kkiexternalrequestevents USING btree ("KKIRequestEventId");


--
-- TOC entry 3539 (class 1259 OID 29820)
-- Name: IX_kkiexternalrequeststates_KKIRequestStateId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkiexternalrequeststates_KKIRequestStateId" ON public.kkiexternalrequeststates USING btree ("KKIRequestStateId");


--
-- TOC entry 3551 (class 1259 OID 29821)
-- Name: IX_kkiexternalznoprequests_KKIZnopRequestId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkiexternalznoprequests_KKIZnopRequestId" ON public.kkiexternalznoprequests USING btree ("KKIZnopRequestId");


--
-- TOC entry 3542 (class 1259 OID 29822)
-- Name: IX_kkiexternalznopstatuses_KKIZnopStatusId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkiexternalznopstatuses_KKIZnopStatusId" ON public.kkiexternalznopstatuses USING btree ("KKIZnopStatusId");


--
-- TOC entry 3554 (class 1259 OID 29823)
-- Name: IX_kkifiles_KKIZnopRequestId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkifiles_KKIZnopRequestId" ON public.kkifiles USING btree ("KKIZnopRequestId");


--
-- TOC entry 3557 (class 1259 OID 29824)
-- Name: IX_kkigeometrys_KKIZnopRequestId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkigeometrys_KKIZnopRequestId" ON public.kkigeometrys USING btree ("KKIZnopRequestId");


--
-- TOC entry 3560 (class 1259 OID 29825)
-- Name: IX_kkimails_KKIZnopRequestId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkimails_KKIZnopRequestId" ON public.kkimails USING btree ("KKIZnopRequestId");


--
-- TOC entry 3563 (class 1259 OID 29826)
-- Name: IX_kkirequestevents_KKIRequestStateId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkirequestevents_KKIRequestStateId" ON public.kkirequestevents USING btree ("KKIRequestStateId");


--
-- TOC entry 3564 (class 1259 OID 29827)
-- Name: IX_kkirequestevents_KKIZnopRequestId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkirequestevents_KKIZnopRequestId" ON public.kkirequestevents USING btree ("KKIZnopRequestId");


--
-- TOC entry 3545 (class 1259 OID 29828)
-- Name: IX_kkiznoprequests_DistrictId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkiznoprequests_DistrictId" ON public.kkiznoprequests USING btree ("DistrictId");


--
-- TOC entry 3546 (class 1259 OID 29829)
-- Name: IX_kkiznoprequests_MunicipalDistrictId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkiznoprequests_MunicipalDistrictId" ON public.kkiznoprequests USING btree ("MunicipalDistrictId");


--
-- TOC entry 3547 (class 1259 OID 29830)
-- Name: IX_kkiznoprequests_SelectedStatusId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkiznoprequests_SelectedStatusId" ON public.kkiznoprequests USING btree ("SelectedStatusId");


--
-- TOC entry 3548 (class 1259 OID 29831)
-- Name: IX_kkiznoprequests_TypeId; Type: INDEX; Schema: public; Owner: kki
--

CREATE INDEX "IX_kkiznoprequests_TypeId" ON public.kkiznoprequests USING btree ("TypeId");


--
-- TOC entry 3570 (class 2606 OID 29615)
-- Name: kkiexternaldistricts FK_kkiexternaldistricts_kkidistricts_DistrictId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternaldistricts
    ADD CONSTRAINT "FK_kkiexternaldistricts_kkidistricts_DistrictId" FOREIGN KEY ("DistrictId") REFERENCES public.kkidistricts("Id") ON DELETE CASCADE;


--
-- TOC entry 3571 (class 2606 OID 29631)
-- Name: kkiexternalgeometrytypes FK_kkiexternalgeometrytypes_kkigeometrytypes_GeometryTypeId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalgeometrytypes
    ADD CONSTRAINT "FK_kkiexternalgeometrytypes_kkigeometrytypes_GeometryTypeId" FOREIGN KEY ("GeometryTypeId") REFERENCES public.kkigeometrytypes("Id") ON DELETE CASCADE;


--
-- TOC entry 3572 (class 2606 OID 29647)
-- Name: kkiexternalmunicipaldistricts FK_kkiexternalmunicipaldistricts_kkimunicipaldistricts_Municipa; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalmunicipaldistricts
    ADD CONSTRAINT "FK_kkiexternalmunicipaldistricts_kkimunicipaldistricts_Municipa" FOREIGN KEY ("MunicipalDistrictId") REFERENCES public.kkimunicipaldistricts("Id") ON DELETE CASCADE;


--
-- TOC entry 3585 (class 2606 OID 29811)
-- Name: kkiexternalrequestevents FK_kkiexternalrequestevents_kkirequestevents_KKIRequestEventId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalrequestevents
    ADD CONSTRAINT "FK_kkiexternalrequestevents_kkirequestevents_KKIRequestEventId" FOREIGN KEY ("KKIRequestEventId") REFERENCES public.kkirequestevents("Id") ON DELETE CASCADE;


--
-- TOC entry 3573 (class 2606 OID 29663)
-- Name: kkiexternalrequeststates FK_kkiexternalrequeststates_kkirequeststates_KKIRequestStateId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalrequeststates
    ADD CONSTRAINT "FK_kkiexternalrequeststates_kkirequeststates_KKIRequestStateId" FOREIGN KEY ("KKIRequestStateId") REFERENCES public.kkirequeststates("Id") ON DELETE CASCADE;


--
-- TOC entry 3579 (class 2606 OID 29726)
-- Name: kkiexternalznoprequests FK_kkiexternalznoprequests_kkiznoprequests_KKIZnopRequestId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalznoprequests
    ADD CONSTRAINT "FK_kkiexternalznoprequests_kkiznoprequests_KKIZnopRequestId" FOREIGN KEY ("KKIZnopRequestId") REFERENCES public.kkiznoprequests("Id") ON DELETE CASCADE;


--
-- TOC entry 3574 (class 2606 OID 29679)
-- Name: kkiexternalznopstatuses FK_kkiexternalznopstatuses_kkiznopstatuses_KKIZnopStatusId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiexternalznopstatuses
    ADD CONSTRAINT "FK_kkiexternalznopstatuses_kkiznopstatuses_KKIZnopStatusId" FOREIGN KEY ("KKIZnopStatusId") REFERENCES public.kkiznopstatuses("Id") ON DELETE CASCADE;


--
-- TOC entry 3580 (class 2606 OID 29742)
-- Name: kkifiles FK_kkifiles_kkiznoprequests_KKIZnopRequestId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkifiles
    ADD CONSTRAINT "FK_kkifiles_kkiznoprequests_KKIZnopRequestId" FOREIGN KEY ("KKIZnopRequestId") REFERENCES public.kkiznoprequests("Id") ON DELETE CASCADE;


--
-- TOC entry 3581 (class 2606 OID 29758)
-- Name: kkigeometrys FK_kkigeometrys_kkiznoprequests_KKIZnopRequestId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkigeometrys
    ADD CONSTRAINT "FK_kkigeometrys_kkiznoprequests_KKIZnopRequestId" FOREIGN KEY ("KKIZnopRequestId") REFERENCES public.kkiznoprequests("Id");


--
-- TOC entry 3582 (class 2606 OID 29774)
-- Name: kkimails FK_kkimails_kkiznoprequests_KKIZnopRequestId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkimails
    ADD CONSTRAINT "FK_kkimails_kkiznoprequests_KKIZnopRequestId" FOREIGN KEY ("KKIZnopRequestId") REFERENCES public.kkiznoprequests("Id");


--
-- TOC entry 3583 (class 2606 OID 29790)
-- Name: kkirequestevents FK_kkirequestevents_kkirequeststates_KKIRequestStateId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkirequestevents
    ADD CONSTRAINT "FK_kkirequestevents_kkirequeststates_KKIRequestStateId" FOREIGN KEY ("KKIRequestStateId") REFERENCES public.kkirequeststates("Id") ON DELETE CASCADE;


--
-- TOC entry 3584 (class 2606 OID 29795)
-- Name: kkirequestevents FK_kkirequestevents_kkiznoprequests_KKIZnopRequestId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkirequestevents
    ADD CONSTRAINT "FK_kkirequestevents_kkiznoprequests_KKIZnopRequestId" FOREIGN KEY ("KKIZnopRequestId") REFERENCES public.kkiznoprequests("Id") ON DELETE CASCADE;


--
-- TOC entry 3575 (class 2606 OID 29695)
-- Name: kkiznoprequests FK_kkiznoprequests_kkidistricts_DistrictId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiznoprequests
    ADD CONSTRAINT "FK_kkiznoprequests_kkidistricts_DistrictId" FOREIGN KEY ("DistrictId") REFERENCES public.kkidistricts("Id") ON DELETE CASCADE;


--
-- TOC entry 3576 (class 2606 OID 29700)
-- Name: kkiznoprequests FK_kkiznoprequests_kkimunicipaldistricts_MunicipalDistrictId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiznoprequests
    ADD CONSTRAINT "FK_kkiznoprequests_kkimunicipaldistricts_MunicipalDistrictId" FOREIGN KEY ("MunicipalDistrictId") REFERENCES public.kkimunicipaldistricts("Id") ON DELETE CASCADE;


--
-- TOC entry 3578 (class 2606 OID 29710)
-- Name: kkiznoprequests FK_kkiznoprequests_kkirequesttypes_TypeId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiznoprequests
    ADD CONSTRAINT "FK_kkiznoprequests_kkirequesttypes_TypeId" FOREIGN KEY ("TypeId") REFERENCES public.kkirequesttypes("Id") ON DELETE CASCADE;


--
-- TOC entry 3577 (class 2606 OID 29705)
-- Name: kkiznoprequests FK_kkiznoprequests_kkiznopstatuses_SelectedStatusId; Type: FK CONSTRAINT; Schema: public; Owner: kki
--

ALTER TABLE ONLY public.kkiznoprequests
    ADD CONSTRAINT "FK_kkiznoprequests_kkiznopstatuses_SelectedStatusId" FOREIGN KEY ("SelectedStatusId") REFERENCES public.kkiznopstatuses("Id") ON DELETE CASCADE;


-- Completed on 2018-12-21 21:03:30

--
-- PostgreSQL database dump complete
--

