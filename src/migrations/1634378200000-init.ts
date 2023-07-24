import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1634378200000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "exchange_rate" ("exchange_rate_id" BIGSERIAL NOT NULL, "currency" character varying NOT NULL DEFAULT '', "rate" numeric(10,2) NOT NULL DEFAULT '0', CONSTRAINT "UQ_48860bb0295d6adddeef0f730dd" UNIQUE ("currency"), CONSTRAINT "PK_04ae633c1519b85864aa9d77141" PRIMARY KEY ("exchange_rate_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "address" ("address_id" BIGSERIAL NOT NULL, "account" character varying NOT NULL, "isFavorite" boolean NOT NULL DEFAULT false, "isOld" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_db4aae0a059fd4ef7709cb802b0" PRIMARY KEY ("address_id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "address"`);
    await queryRunner.query(`DROP TABLE "exchange_rate"`);
  }
}
