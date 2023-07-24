import styled from "styled-components";
import {Form as FromIkForm, ErrorMessage as FormIkErrorMessage} from 'formik';

export const Form = styled(FromIkForm)`
    width: 400px;
    padding: 8px;
    border: 1px solid #212121
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const FormField = styled.label`
    display: flex;
    flex-direction: column;
`;

export const ErrorMessage = styled(FormIkErrorMessage)`
    font-size: 14px;
    color: ${p => p.theme.colors.error}
`;