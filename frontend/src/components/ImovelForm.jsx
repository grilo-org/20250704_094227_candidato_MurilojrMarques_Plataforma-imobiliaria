import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createImovel, updateImovel } from '../services/api';

const ImovelForm = ({ imovel = {}, onSubmitSuccess, onCancel }) => {
    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('Título é obrigatório'),
        descricao: Yup.string().required('Descrição é obrigatória'),
        endereco: Yup.string().required('Endereço é obrigatório'),
        finalidade: Yup.string().required('Finalidade é obrigatória'),
        valor: Yup.number()
            .required('Valor é obrigatório')
            .positive('Valor deve ser positivo')
            .typeError('Digite um valor numérico válido'),
        quartos: Yup.number()
            .required('Número de quartos é obrigatório')
            .min(0, 'Número de quartos não pode ser negativo')
            .integer('Deve ser um número inteiro'),
        banheiros: Yup.number()
            .required('Número de banheiros é obrigatório')
            .min(0, 'Número de banheiros não pode ser negativo')
            .integer('Deve ser um número inteiro'),
        garagem: Yup.boolean(),
        corretor: Yup.string().required('Corretor é obrigatório'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            let response;
            
            if (imovel.id) {
                response = await updateImovel(imovel.id, values);
            } else {
                response = await createImovel(values);
            }
            
            alert(`Imóvel ${imovel.id ? 'atualizado' : 'cadastrado'} com sucesso!`);
            
            if (!imovel.id) resetForm();
            if (onSubmitSuccess) onSubmitSuccess(response.data);
            
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert(`Erro: ${error.response?.data?.message || 'Erro ao processar a solicitação'}`);
        } finally {
            setSubmitting(false);
        }
    };

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
        textarea: {
            display: 'block',
            width: '100%',
            padding: '10px',
            marginBottom: '5px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            minHeight: '100px',
            resize: 'vertical',
            fontFamily: 'inherit',
        },
        select: {
            display: 'block',
            width: '100%',
            padding: '10px',
            marginBottom: '5px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
        },
        label: {
            fontWeight: 'bold',
            marginTop: '10px',
            display: 'block',
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
        checkbox: {
            marginRight: '10px',
        },
        buttonGroup: {
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px',
            marginTop: '20px',
        },
        button: {
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
        },
        submitButton: {
            backgroundColor: '#007bff',
            color: '#fff',
        },
        cancelButton: {
            backgroundColor: '#f5f5f5',
            color: '#333',
            border: '1px solid #ddd',
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
                finalidade: imovel.finalidade || 'venda',
                valor: imovel.valor || '',
                quartos: imovel.quartos || '',
                banheiros: imovel.banheiros || '',
                garagem: imovel.garagem || false,
                corretor: imovel.corretor || '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form style={styles.container}>
                    <label style={styles.label} htmlFor="titulo">Título</label>
                    <Field name="titulo" style={styles.field} />
                    <ErrorMessage name="titulo" component="div" style={styles.error} />

                    <label style={styles.label} htmlFor="descricao">Descrição</label>
                    <Field name="descricao" as="textarea" style={styles.textarea} />
                    <ErrorMessage name="descricao" component="div" style={styles.error} />

                    <label style={styles.label} htmlFor="endereco">Endereço</label>
                    <Field name="endereco" style={styles.field} />
                    <ErrorMessage name="endereco" component="div" style={styles.error} />

                    <label style={styles.label} htmlFor="finalidade">Finalidade</label>
                    <Field name="finalidade" as="select" style={styles.select}>
                        <option value="venda">Venda</option>
                        <option value="locacao">Locação</option>
                    </Field>
                    <ErrorMessage name="finalidade" component="div" style={styles.error} />

                    <label style={styles.label} htmlFor="valor">Valor (R$)</label>
                    <Field name="valor" type="number" step="0.01" style={styles.field} />
                    <ErrorMessage name="valor" component="div" style={styles.error} />

                    <label style={styles.label} htmlFor="quartos">Quartos</label>
                    <Field name="quartos" type="number" style={styles.field} />
                    <ErrorMessage name="quartos" component="div" style={styles.error} />

                    <label style={styles.label} htmlFor="banheiros">Banheiros</label>
                    <Field name="banheiros" type="number" style={styles.field} />
                    <ErrorMessage name="banheiros" component="div" style={styles.error} />

                    <div style={styles.checkboxContainer}>
                        <Field name="garagem" type="checkbox" style={styles.checkbox} />
                        <label htmlFor="garagem">Possui garagem</label>
                    </div>

                    <label style={styles.label} htmlFor="corretor">Corretor Responsável</label>
                    <Field name="corretor" style={styles.field} />
                    <ErrorMessage name="corretor" component="div" style={styles.error} />

                    <div style={styles.buttonGroup}>
                        {onCancel && (
                            <button
                                type="button"
                                onClick={onCancel}
                                style={{ ...styles.button, ...styles.cancelButton }}
                            >
                                Cancelar
                            </button>
                        )}
                        <button
                            type="submit"
                            style={{
                                ...styles.button,
                                ...styles.submitButton,
                                ...(isSubmitting ? styles.buttonDisabled : {}),
                            }}
                            disabled={isSubmitting}
                        >
                            {imovel.id ? 'Atualizar' : 'Cadastrar'}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ImovelForm;