import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePacienteTable1710000000003 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "paciente" (
                "id" SERIAL PRIMARY KEY,
                "nombre" VARCHAR(100) NOT NULL,
                "apellido" VARCHAR(100) NOT NULL,
                "cedula" VARCHAR(20) UNIQUE NOT NULL
            );
        `);
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "paciente";`);
    }
}