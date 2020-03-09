<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
class LuckyController extends AbstractController
{
    /**
         * @Route("/lucky/number",methods={"GET"})
         */
    public function number(): Response
    {
        $number = mt_rand(0, 100);

        return $this->render('base.html.twig',array('number' => $number));
    }
}
