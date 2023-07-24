import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetExchangeRates1634378300000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('exchange_rate')
      .values([
        { currency: 'EUR', rate: 1667.91 },
        { currency: 'USD', rate: 1846.89 },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM exchange_rate WHERE currency = 'EUR' OR currency = 'USD'
  `);
  }
}
