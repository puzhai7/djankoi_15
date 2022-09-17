--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-09-17 20:03:58 MSK

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

DROP DATABASE djankoi;
--
-- TOC entry 3590 (class 1262 OID 16394)
-- Name: djankoi; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE djankoi WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE djankoi OWNER TO postgres;

\connect djankoi

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
-- TOC entry 210 (class 1259 OID 16396)
-- Name: person; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.person (
    id integer NOT NULL,
    name character varying(255),
    surname character varying(255)
);


ALTER TABLE public.person OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16395)
-- Name: person_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.person_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.person_id_seq OWNER TO postgres;

--
-- TOC entry 3591 (class 0 OID 0)
-- Dependencies: 209
-- Name: person_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.person_id_seq OWNED BY public.person.id;


--
-- TOC entry 212 (class 1259 OID 16406)
-- Name: post; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.post (
    id integer NOT NULL,
    title character varying(255),
    content character varying(255),
    user_id integer
);


ALTER TABLE public.post OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16405)
-- Name: post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_id_seq OWNER TO postgres;

--
-- TOC entry 3592 (class 0 OID 0)
-- Dependencies: 211
-- Name: post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.post_id_seq OWNED BY public.post.id;


--
-- TOC entry 3435 (class 2604 OID 16399)
-- Name: person id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person ALTER COLUMN id SET DEFAULT nextval('public.person_id_seq'::regclass);


--
-- TOC entry 3436 (class 2604 OID 16409)
-- Name: post id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post ALTER COLUMN id SET DEFAULT nextval('public.post_id_seq'::regclass);


--
-- TOC entry 3582 (class 0 OID 16396)
-- Dependencies: 210
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.person (id, name, surname) VALUES (1, 'ivan', 'ogg');
INSERT INTO public.person (id, name, surname) VALUES (2, 'ivan', 'ogg');
INSERT INTO public.person (id, name, surname) VALUES (3, 'James', 'Frank');
INSERT INTO public.person (id, name, surname) VALUES (4, 'Viktor', 'Blood');


--
-- TOC entry 3584 (class 0 OID 16406)
-- Dependencies: 212
-- Data for Name: post; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.post (id, title, content, user_id) VALUES (1, 'Python', 'ogg', 1);
INSERT INTO public.post (id, title, content, user_id) VALUES (2, 'JS', 'ogg', 1);
INSERT INTO public.post (id, title, content, user_id) VALUES (3, 'Kotlin', 'ogg', 1);
INSERT INTO public.post (id, title, content, user_id) VALUES (4, 'Swift', 'ogg', 1);
INSERT INTO public.post (id, title, content, user_id) VALUES (5, 'C#', 'ogg', 2);
INSERT INTO public.post (id, title, content, user_id) VALUES (6, 'John', 'ogg', 2);
INSERT INTO public.post (id, title, content, user_id) VALUES (7, 'C++', 'ogg', 2);
INSERT INTO public.post (id, title, content, user_id) VALUES (8, 'Root', 'ogg', 2);
INSERT INTO public.post (id, title, content, user_id) VALUES (9, 'Require', 'ogg', 2);
INSERT INTO public.post (id, title, content, user_id) VALUES (10, 'Response', 'ogg', 2);


--
-- TOC entry 3593 (class 0 OID 0)
-- Dependencies: 209
-- Name: person_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.person_id_seq', 4, true);


--
-- TOC entry 3594 (class 0 OID 0)
-- Dependencies: 211
-- Name: post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.post_id_seq', 10, true);


--
-- TOC entry 3438 (class 2606 OID 16403)
-- Name: person person_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pkey PRIMARY KEY (id);


--
-- TOC entry 3440 (class 2606 OID 16413)
-- Name: post post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);


--
-- TOC entry 3441 (class 2606 OID 16414)
-- Name: post post_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.person(id);


-- Completed on 2022-09-17 20:03:58 MSK

--
-- PostgreSQL database dump complete
--

