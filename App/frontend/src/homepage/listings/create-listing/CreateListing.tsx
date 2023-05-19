import { useState } from "react";
import decode from 'jwt-decode';
import {describeUser} from '../../profile/profile-operations';
import { InputContainer, Form, Header, PriceWrapper, Price, Dollar, Textarea, Submit, CharacterCounter } from './create-listing-components';
import { createListing } from "../list-listing/listing-operations";
 
const CreateListing = () => {
    const [content, setContent] = useState("");
    const [header, setHeader] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const priceNum = parseInt(price);

        let userId: string | undefined;
        if (window.localStorage.getItem('token')) {
            const token: string | null = window.localStorage.getItem('token');
            if (token) {
                const decodedToken: { user: { _id: string }, iat: number, exp: number } = decode(token);
                userId = decodedToken.user._id;
            }
        }

        const profileResponse = await describeUser(userId);

        const listing = {
            userId: profileResponse._id,
            location: header,
            description: content,
            price: priceNum,
            status: "For Sale"
        }

        await createListing(listing);


        setContent("");
        setHeader("");
        setPrice("");
    };

    return(
        <InputContainer>
            <Form onSubmit={handleSubmit} id='ticketForm'>
                <div style={{display: 'flex'}}>
                    <Header 
                        type="string" 
                        name="title"
                        placeholder="Address..."
                        value={header}
                        onChange={(e) => setHeader(e.target.value)}
                    />
                    <PriceWrapper>
                        <Price 
                            type="number" 
                            name="price"
                            placeholder="Price..."
                            value={price.toLocaleString()}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <Dollar>$</Dollar>
                    </PriceWrapper>

                </div>
                <Textarea
                    rows={8}
                    maxLength={140}
                    placeholder="Enter your details here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required  
                />

                <Submit>Submit</Submit>
                <CharacterCounter>{content.length}/140</CharacterCounter>
            </Form>
        </InputContainer>
    );
};

export default CreateListing;