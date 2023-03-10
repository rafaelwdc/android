package br.com.alura.agenda.database;

import static br.com.alura.agenda.database.AgendaMigrations.TODAS_MIGRATIONS;

import android.content.Context;

import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;
import androidx.room.TypeConverters;

import br.com.alura.agenda.database.converter.ConversorCalendar;
import br.com.alura.agenda.database.converter.ConversorTipoTelefone;
import br.com.alura.agenda.database.dao.AlunoDAO;
import br.com.alura.agenda.database.dao.TelefoneDAO;
import br.com.alura.agenda.model.Aluno;
import br.com.alura.agenda.model.Telefone;

@Database(entities = {Aluno.class, Telefone.class}, version = 6, exportSchema = false)
@TypeConverters({ConversorCalendar.class, ConversorTipoTelefone.class})
public abstract class AgendaDatabase extends RoomDatabase {

    private static final String NOME_BANCO_DE_DADOS = "agenda.db";

    public abstract AlunoDAO getRoomAlunoDao();
    public abstract TelefoneDAO getTelefoneDAO();

    public static AgendaDatabase getInstance(Context context) {
        return Room
                .databaseBuilder(context, AgendaDatabase.class, NOME_BANCO_DE_DADOS)
                .addMigrations(TODAS_MIGRATIONS)
                .build();
    }
}












        //    public static AgendaDatabase getInstance(Context context) {
//        return Room
//                .databaseBuilder(context,
//                        AgendaDatabase.class,
//                        NOME_BANCO_DE_DADOS)
//                .allowMainThreadQueries()
//                .addMigrations(new Migration(1, 2) {
//                    @Override
//                    public void migrate(@NonNull SupportSQLiteDatabase database) {
//                        database.execSQL("ALTER TABLE aluno ADD COLUMN sobrenome TEXT");
//                    }
//                }, new Migration(2, 3) {
//                    @Override
//                    public void migrate(@NonNull SupportSQLiteDatabase database) {
//                        // Criar nova tabela com as informações desejadas;
//
//                        database.execSQL("CREATE TABLE IF NOT EXISTS `Aluno_novo`" +
//                                "(`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL," +
//                                "`nome` TEXT," +
//                                " `sobrenome` TEXT," +
//                                " `telefone` TEXT," +
//                                " `email` TEXT)");
//
//                        // Copiar dados da tabela antiga para a nova;
//
//                        database.execSQL("INSERT INTO Aluno_novo (id, nome, telefone, email) " +
//                                "SELECT id, nome, telefone, email FROM Aluno");
//
//                        // Remove tabela antiga;
//
//                        database.execSQL("DROP TABLE Aluno");
//
//                        //Renomear a tabela nova com o nome da tabela antiga;
//
//                        database.execSQL("ALTER TABLE Aluno_novo RENAME TO Aluno");
//                    }
//                })
//                .build();
//    }