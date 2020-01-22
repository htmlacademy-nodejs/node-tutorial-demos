--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Debian 12.7-1.pgdg100+1)
-- Dumped by pg_dump version 13.3

-- Started on 2021-07-13 18:47:29 MSK

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16399)
-- Name: accounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts (
    id bigint NOT NULL,
    firstname character varying(100),
    lastname character varying(100),
    birth_date date,
    email character varying(100)
);


ALTER TABLE public.accounts OWNER TO postgres;

--
-- TOC entry 2925 (class 0 OID 0)
-- Dependencies: 203
-- Name: TABLE accounts; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.accounts IS 'Учётные записи абонентов';


--
-- TOC entry 202 (class 1259 OID 16397)
-- Name: accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_id_seq OWNER TO postgres;

--
-- TOC entry 2926 (class 0 OID 0)
-- Dependencies: 202
-- Name: accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;


--
-- TOC entry 205 (class 1259 OID 16453)
-- Name: phones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.phones (
    id bigint NOT NULL,
    account_id bigint NOT NULL,
    phone character varying(50)
);


ALTER TABLE public.phones OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16451)
-- Name: phones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.phones_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.phones_id_seq OWNER TO postgres;

--
-- TOC entry 2927 (class 0 OID 0)
-- Dependencies: 204
-- Name: phones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.phones_id_seq OWNED BY public.phones.id;


--
-- TOC entry 2783 (class 2604 OID 16402)
-- Name: accounts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);


--
-- TOC entry 2784 (class 2604 OID 16456)
-- Name: phones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phones ALTER COLUMN id SET DEFAULT nextval('public.phones_id_seq'::regclass);


--
-- TOC entry 2917 (class 0 OID 16399)
-- Dependencies: 203
-- Data for Name: accounts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accounts (id, firstname, lastname, birth_date, email) FROM stdin;
1	James	Hetfield	1963-08-03	metallica@aaa.local
2	Jon	Bon Jovi	1962-03-02	bon@pisem.local
3	Ivan	Ivanov	1994-02-05	ivanov@ivan.local
4	Ozzy	Osbourne	1948-12-03	ozz@fan.local
\.


--
-- TOC entry 2919 (class 0 OID 16453)
-- Dependencies: 205
-- Data for Name: phones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.phones (id, account_id, phone) FROM stdin;
1	1	+156589894545
2	1	+256589894545
3	2	+257844878
4	3	+75784487822
5	4	+77895955545
\.


--
-- TOC entry 2928 (class 0 OID 0)
-- Dependencies: 202
-- Name: accounts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accounts_id_seq', 4, true);


--
-- TOC entry 2929 (class 0 OID 0)
-- Dependencies: 204
-- Name: phones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.phones_id_seq', 5, true);


--
-- TOC entry 2786 (class 2606 OID 16460)
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);


--
-- TOC entry 2788 (class 2606 OID 16458)
-- Name: phones phones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phones
    ADD CONSTRAINT phones_pkey PRIMARY KEY (id);


--
-- TOC entry 2789 (class 2606 OID 16466)
-- Name: phones phones_accounts; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phones
    ADD CONSTRAINT phones_accounts FOREIGN KEY (account_id) REFERENCES public.accounts(id) MATCH FULL NOT VALID;


-- Completed on 2021-07-13 18:47:30 MSK

--
-- PostgreSQL database dump complete
--

