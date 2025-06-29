import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ImovelForm = ({ imovel = {}, onSubmit }) => {
    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('Título é obrigatório'),
        descricao: Yup.string().required('Descrição é obrigatória'),
        endereco: Yup.string().required('Endereço é obrigatório'),
        finalidade: Yup.string().required('Finalidade é obrigatória'),
        valor: Yup.number().required('Valor é obrigatório').positive('Valor deve ser positivo'),
        quartos: Yup.number().required('Número de quartos é obrigatório').min(0, 'Número de quartos não pode ser negativo'),
        banheiros: Yup.number().required('Número de banheiros é obrigatório').min(0, 'Número de banheiros não pode ser negativo'),
        garagem: Yup.boolean(),
        corretor: Yup.string().required('Corretor é obrigatório'),
    });

    const styles = {
        container: {
            maxWidth: '500px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
        },
        field: {
            display: 'block',
            width: '100%',
            padding: '10px',
            marginBottom: '5px',
            borderRadius: '4px',
            border: '1px solid #ccc',
        },
        label: {
            fontWeight: 'bold',
            marginTop: '10px',
        },
        error: {
            color: 'red',
            fontSize: '12px',
            marginBottom: '10px',
        },
        checkboxContainer: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '15px',
        },
        buttonDisabled: {
            backgroundColor: '#7aaed9',
            cursor: 'not-allowed',
        },
    };

    return (
        <Formik
            initialValues={{
                titulo: imovel.titulo || '',
                descricao: imovel.descricao || '',
                endereco: imovel.endereco || '',
                finalidade: imovel.finalidade || '',
                valor: imovel.valor || '',
                quartos: imovel.quartos || 0,
                banheiros: imovel.banheiros || 0,
                garagem: imovel.garagem || false,
                corretor: imovel.corretor || '',
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit} style={styles.container}>
                    <label style={styles.label}>Título</label>
                    <Field name="titulo" placeholder="Título" style={styles.field} />
                    <ErrorMessage name="titulo" component="div" style={styles.error} />

                    <label style={styles.label}>Descrição</label>
                    <Field name="descricao" as="textarea" placeholder="Descrição" style={styles.field} />
                    <ErrorMessage name="descricao" component="div" style={styles.error} />

                    <label style={styles.label}>Endereço</label>
                    <Field name="endereco" placeholder="Endereço" style={styles.field} />
                    <ErrorMessage name="endereco" component="div" style={styles.error} />

                    <label style={styles.label}>Finalidade</label>
                    <Field name="finalidade" as="select" style={styles.field}>
                        <option value="">Selecione a finalidade</option>
                        <option value="venda">Venda</option>
                        <option value="aluguel">Aluguel</option>
                    </Field>
                    <ErrorMessage name="finalidade" component="div" style={styles.error} />

                    <label style={styles.label}>Valor</label>
                    <Field name="valor" type="number" placeholder="Valor" style={styles.field} />
                    <ErrorMessage name="valor" component="div" style={styles.error} />

                    <label style={styles.label}>Quartos</label>
                    <Field name="quartos" type="number" placeholder="Número de quartos" style={styles.field} />
                    <ErrorMessage name="quartos" component="div" style={styles.error} />

                    <label style={styles.label}>Banheiros</label>
                    <Field name="banheiros" type="number" placeholder="Número de banheiros" style={styles.field} />
                    <ErrorMessage name="banheiros" component="div" style={styles.error} />

                    <div style={styles.checkboxContainer}>
                        <Field type="checkbox" name="garagem" />
                        <label style={{ marginLeft: '8px' }}>Garagem</label>
                    </div>

                    <label style={styles.label}>Corretor</label>
                    <Field name="corretor" placeholder="Corretor responsável" style={styles.field} />
                    <ErrorMessage name="corretor" component="div" style={styles.error} />

                    <button
                        type="submit"
                        style={{
                            ...styles.button,
                            ...(isSubmitting ? styles.buttonDisabled : {}),
                        }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ImovelForm;