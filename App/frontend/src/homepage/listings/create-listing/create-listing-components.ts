import styled from "styled-components";

export const InputContainer = styled.div`{
    position: absolute;
    width: 65%;
    min-height: 28%;
    padding: 0.8rem;

    right: 0.8%;
    top: 12%;

    background: #fdfdfd;
    font-family: 'Jost', sans-serif;
    font-size: 1.2rem;

    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}`;

export const Form = styled.form`{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}`;
export const Submit = styled.button`{
    width: 20%;
    align-self: flex-end;
    padding: 0.5rem;
    margin-top: 0.5rem;

    color: #fdfdfd;
    font-family: 'Jost', sans-serif;
    font-size: 1.2rem;

    outline: none;
    background:#0c0f0a;
    border-radius: 0.7rem;

    box-shadow: #0c0f0a 0px;

    transition: 500ms;
    transition-timing-function: cubic-bezier(0.2, 0.9, 0.0, 1.0);

    &:hover{
        background: #fff0;
        color: #0c0f0a;
        box-shadow: #0c0f0a 1px;
    }
}`;

export const Textarea = styled.textarea`{
    resize: none;

    padding: 0.5rem;
    margin-top: 0.5rem;

    color: #0c0f0a;
    font-family: 'Jost', sans-serif;
    font-size: 1.2rem;

    border: 1px solid #0c0f0a;
    outline: none;
    border-radius: 0.7rem;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}`;

export const Header = styled.input`{
    padding: 0.5rem;
    //margin-top: 0.5rem;

    color: #0c0f0a;
    font-family: 'Jost', sans-serif;
    font-size: 1rem;

    border: 1px solid #0c0f0a;
    outline: none;
    border-radius: 0.7rem;

    margin-right: 0.5rem;
    min-width: 40%;
}`;
export const Price = styled.input`{
    padding: 0.5rem;

    color: #0c0f0a;
    font-family: 'Jost', sans-serif;
    font-size: 1rem;

    border: 1px solid #0c0f0a;
    outline: none;
    border-radius: 0.7rem 0 0 0.7rem;

    margin-right: 0.5rem;
    min-width: 40%;
}`;
export const PriceWrapper = styled.div`{
    display: flex;
}`;
export const Dollar = styled.div`{
    border : 1px solid #0c0f0a;
    border-radius: 0 0.7rem 0.7rem 0;
    height: 2.5rem;
    width: 2.5rem;
    text-align: center;
    line-height: 2.5rem;

    margin-left: -0.25rem;
}`;

export const CharacterCounter = styled.div`{
    position: absolute;
    bottom: 5%;
    left: 2%;
}`;