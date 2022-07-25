import fastifyStatic from "@fastify/static";
import Fastify from 'fastify';
import { link } from "fs";
import { join } from 'path';
import { abort } from "process";
import { about } from "./components/about";
import { contact } from "./components/Contact";
import { Page } from './components/Page';
import { Resume } from "./components/resume";



const server = Fastify({ logger: true });


server.register(fastifyStatic, {


    root: join(__dirname, 'public'),
    prefix: '/public/',
})

server.get('/resume', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return Resume('resume', 'red')
})

server.get('/contact', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return contact('contact', 'blue')
})

server.get('/about', (req, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')

    return about('about', 'orange')
})

server.get('/style.css', (req, reply) => {
    return reply.sendFile('style.css')
})
server.get('/images/riyadh', (req, reply) => {
    return reply.sendFile('images/riyadh.jpeg')
})
server.get('/images/baner.jpg', (req, reply) => {
    return reply.sendFile('images/baner.jpg')
})
server.get('/images/program.jpeg', (req, reply) => {
    return reply.sendFile('images/program.jpeg')
})

server.get('/cv', (req, reply) => {
    return reply.sendFile('hadi-cv.pdf')
})

server.listen({ port: 4002, host: '0.0.0.0' }, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
})