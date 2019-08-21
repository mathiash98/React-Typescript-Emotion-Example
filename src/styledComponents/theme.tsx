import styled from '@emotion/styled';

const colors = {
    primary: '#FAF8FA',
    secondary: '#e5e6e7'
};

export const MainContainer = styled.div({
    width: '100%',
    maxWidth: '800px',
    borderRadius: '10px;',
    margin: 'auto',
    marginTop: '30px',
    backgroundColor: colors.primary,
    padding: '2vw'
});


export const Form = styled.form({
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
});

export const Input = styled.input({
    borderRadius: '5px',
    padding: '3px 7px',
    margin: '8px 0',
    border: '2px solid lightgrey'
});

export const Modal = styled.div({
    position: 'fixed',
    width: '100%',
    maxWidth: '600px',
    padding: '2vw',
    backgroundColor: colors.secondary,
    borderRadius: '20px',
    zIndex: 1000,
    margin: 'auto',
    textAlign: 'center',
    left: '0',
    right: '0'
});

export const ModalHeader = styled.div({
    display: 'flex',
    width: '100%',
    margin: '0',
    padding: '0',
    height: '30px',
    flexDirection: 'row-reverse'
});

export const CloseButton = styled.button({
    backgroundColor: 'transparent',
    border: 'none',
    alignSelf: 'flex-end',
    borderRadius: '5px',
    fontSize: '20px',
    '&:hover': {
        cursor: 'pointer'
    }
});

export const DetailsList = styled.ul({
    listStyle: 'none'
});

export const Image = styled.img({
    maxHeight: '100%',
    maxWidth: '100%'
});