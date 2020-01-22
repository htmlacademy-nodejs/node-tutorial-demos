/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : PostgreSQL
 Source Server Version : 120002
 Source Host           : localhost:5432
 Source Catalog        : library
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 120002
 File Encoding         : 65001

 Date: 30/04/2020 17:05:53
*/


-- ----------------------------
-- Table structure for Readers
-- ----------------------------
DROP TABLE IF EXISTS "public"."Readers";
CREATE TABLE "public"."Readers" (
  "id" int4 NOT NULL DEFAULT nextval('"Readers_id_seq"'::regclass),
  "firstname" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "lastname" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "birthDate" timestamptz(6) NOT NULL,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL,
  "deletedAt" timestamptz(6)
)
;
ALTER TABLE "public"."Readers" OWNER TO "academy";

-- ----------------------------
-- Records of Readers
-- ----------------------------
BEGIN;
INSERT INTO "public"."Readers" VALUES (1, 'Ivan', 'Ivanov', '1986-01-01 10:00:00+10', '2020-04-01 00:00:00+10', '2020-04-01 00:00:00+10', NULL);
INSERT INTO "public"."Readers" VALUES (3, 'Jon', 'Smith', '1970-02-01 10:00:00+10', '2020-04-01 00:00:00+10', '2020-04-01 00:00:00+10', NULL);
INSERT INTO "public"."Readers" VALUES (4, 'Alex', 'Such', '1989-11-14 10:00:00+10', '2020-04-01 00:00:00+10', '2020-04-01 00:00:00+10', NULL);
INSERT INTO "public"."Readers" VALUES (5, 'Gram', 'Dathon', '1981-01-01 10:00:00+10', '2020-04-01 00:00:00+10', '2020-04-01 00:00:00+10', NULL);
INSERT INTO "public"."Readers" VALUES (2, 'Ludwig', 'Aram', '1955-01-01 10:00:00+10', '2020-04-01 00:00:00+10', '2020-04-01 00:00:00+10', NULL);
COMMIT;

-- ----------------------------
-- Primary Key structure for table Readers
-- ----------------------------
ALTER TABLE "public"."Readers" ADD CONSTRAINT "Readers_pkey" PRIMARY KEY ("id");
