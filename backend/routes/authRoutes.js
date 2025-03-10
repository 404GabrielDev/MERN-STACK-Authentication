import express from 'express'
import { login, logout, registrar, resetPassword, sendOtpEmail, verifyEmailAccount } from '../controller/authController.js'
import {forgetPassword} from '../controller/authController.js'

const router = express.Router()

router.post('/registrar', registrar)
router.post('/login', login)
router.post('/forget-password', forgetPassword)
router.post('/reset-password', resetPassword)
router.post('/sendOtpEmail', sendOtpEmail)
router.post('/verifyEmailAccount', verifyEmailAccount)
router.post('/logout', logout)

export default router